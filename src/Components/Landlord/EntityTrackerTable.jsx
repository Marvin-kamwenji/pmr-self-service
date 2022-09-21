import React from 'react'
import { TableContainer, Paper, Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import { faPenToSquare, faPen, faTrash, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function toTitleCase (camelCase){
    return camelCase
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, function (str) { return str.toUpperCase(); });
}

function EntityTrackerTableDynamic({objectList}) {
    const columns = [];
    Object.keys(objectList[0]).map((key)=> {
        columns.push({
            field: key,
            headerName: toTitleCase(key),
            width: 100
        })
    })
    return (
        <div  style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={objectList}
                columns={columns}
                checkboxSelection
            />
        </div>    
    )
}

function AddButton({text, setIndex, index}) {
  return (
      <div className='w-1/2 grid grid-cols-3 mb-4 mt-3'>
          <button type='reset'
              className='w-fit add-button-style col-span-2 col-start-2 py-2 px-4 border border-blue-500 hover:border-transparent rounded'
              onClick={() => {
                  setIndex(index)
              }}
          >
              <div className='flex items-center'>
                  <FontAwesomeIcon icon={faPlusCircle} className='mr-2' size='2x' />
                  <span>Add {text}</span>
              </div>              
          </button>
      </div>
  )
}

function EntityTrackerTableNextOfKin({nextOfKins, setIndex, removeKin}) {
    return (
        <div className='flex justify-center'>
            <div style={{ height: 'auto', width: '90%'}}>
            <TableContainer component={Paper}>
                <Table sx={{ width: '100%' }} aria-label="simple table" size='small'>
                    <TableHead sx={{background: '#DDDDDD'}}>
                        <TableRow >
                            <TableCell sx={{color:'#3598DC'}}>No</TableCell>
                            <TableCell sx={{color:'#3598DC'}}>First Name</TableCell>
                            <TableCell sx={{color:'#3598DC'}}>Middle Name</TableCell>
                            <TableCell sx={{color:'#3598DC'}}>Last Name</TableCell>
                            <TableCell sx={{color:'#3598DC'}}>Address</TableCell>
                            <TableCell sx={{color:'#3598DC'}}>Mobile No</TableCell>
                            <TableCell sx={{color:'#3598DC'}}>Email</TableCell>
                            <TableCell sx={{color:'#3598DC'}}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            nextOfKins.map((kin,index) => 
                                <TableRow 
                                key={kin.index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell component="th" scope="row">{kin.kinFirstName}</TableCell>
                                    <TableCell>{kin.kinMiddleName}</TableCell>
                                    <TableCell>{kin.kinLastName}</TableCell>
                                    <TableCell>{kin.kinAddress}</TableCell>
                                    <TableCell>{kin.kinMobileNo}</TableCell>
                                    <TableCell>{kin.kinEmail}</TableCell>
                                    <TableCell>
                                        <button
                                            className='btn btn-link no-underline text-xs'
                                            type='reset'
                                            onClick={() => { setIndex(kin.index) }}
                                        >
                                            <FontAwesomeIcon icon={faPen} className='pl-2 pr-2 edit-icon' />
                                            Edit
                                        </button>
                                        {nextOfKins.length === index + 1 && index > 0
                                        ? 
                                                <button
                                                    className='btn btn-link no-underline text-xs'
                                                    type='reset'
                                                    onClick={() => {
                                                        removeKin(kin.index)
                                                    }}
                                                >
                                                    <FontAwesomeIcon icon={faTrash} className='pl-2 pr-2 delete-icon' />
                                                    Remove
                                                </button>                                           
                                        :
                                            null
                                        }
                                        
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        </div>
        
        
    )
}

function EntityTrackerTableProperty({properties, setIndex, removeProperty}) {
    return (
        <div className='flex justify-center'>
            <div style={{ height: 'auto', width: '90%'}}>
            <TableContainer component={Paper}>
                <Table sx={{ width: '100%' }} aria-label="simple table" size='small'>
                    <TableHead sx={{background: '#DDDDDD'}}>
                        <TableRow >
                            <TableCell sx={{color:'#3598DC'}}>No</TableCell>
                            <TableCell sx={{color:'#3598DC'}}>Property Name</TableCell>
                            <TableCell sx={{color:'#3598DC'}}>Property Identity</TableCell>
                            <TableCell sx={{color:'#3598DC'}}>Address</TableCell>
                            <TableCell sx={{color:'#3598DC'}}>Road</TableCell>
                            <TableCell sx={{color:'#3598DC'}}>3 Month rent</TableCell>
                            <TableCell sx={{color:'#3598DC'}}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            properties.map((property,index) => 
                                <TableRow 
                                key={property.index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell component="th" scope="row">{property.propertyName}</TableCell>
                                    <TableCell>{property.propertyIdentity}</TableCell>
                                    <TableCell>{property.address}</TableCell>
                                    <TableCell>{property.road}</TableCell>
                                    <TableCell>{property.threeMonthRent}</TableCell>
                                    <TableCell>
                                        <button
                                            className='btn btn-link no-underline text-xs'
                                            type='reset'
                                            onClick={() => { setIndex(property.index) }}
                                        >
                                            <FontAwesomeIcon icon={faPen} className='pl-2 pr-2 edit-icon' />
                                            Edit
                                        </button>
                                        {properties.length === index + 1 && index > 0
                                        ? 
                                                <button
                                                    className='btn btn-link no-underline text-xs'
                                                    type='reset'
                                                    onClick={() => {
                                                        removeProperty(property.index)
                                                    }}
                                                >
                                                    <FontAwesomeIcon icon={faTrash} className='pl-2 pr-2 delete-icon' />
                                                    Remove
                                                </button>                                           
                                        :
                                            null
                                        }
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        </div>
        
        
    )
}

function EntityTrackerTableBankDetail({bankDetails  , setIndex, removePayDetail}) {
    return (
        <div className='flex justify-center'>
            <div style={{ height: 'auto', width: '90%'}}>
            <TableContainer component={Paper}>
                <Table sx={{ width: '100%' }} aria-label="simple table" size='small'>
                    <TableHead sx={{background: '#DDDDDD'}}>
                        <TableRow >
                            <TableCell sx={{color:'#3598DC'}}>No</TableCell>
                            <TableCell sx={{color:'#3598DC'}}>Bank</TableCell>
                            <TableCell sx={{color:'#3598DC'}}>Branch</TableCell>
                            <TableCell sx={{color:'#3598DC'}}>Acc Name</TableCell>
                            <TableCell sx={{color:'#3598DC'}}>Account No</TableCell>
                            <TableCell sx={{color:'#3598DC'}}>Service</TableCell>
                            <TableCell sx={{color:'#3598DC'}}>Mobile No</TableCell>
                            <TableCell sx={{color:'#3598DC'}}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            bankDetails.map((bankDetail,index) => 
                                <TableRow 
                                key={bankDetail.index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell component="th" scope="row">{bankDetail.BankT}</TableCell>
                                    <TableCell>{bankDetail.bankBranchT}</TableCell>
                                    <TableCell>{bankDetail.accountName}</TableCell>
                                    <TableCell>{bankDetail.accountNo}</TableCell>
                                    <TableCell>{bankDetail.serviceProviderT}</TableCell>
                                    <TableCell>{bankDetail.accountNoMobile}</TableCell>
                                    <TableCell>
                                        <button
                                            className='btn btn-link no-underline text-xs'
                                            type='reset'
                                            onClick={() => { setIndex(bankDetail.index) }}
                                        >
                                            <FontAwesomeIcon icon={faPen} className='pl-2 pr-2 edit-icon' />
                                            Edit
                                        </button>
                                        {bankDetails.length === index + 1 && index > 0
                                        ? 
                                                <button
                                                    className='btn btn-link no-underline text-xs'
                                                    type='reset'
                                                    onClick={() => {
                                                        removePayDetail(bankDetail.index)
                                                    }}
                                                >
                                                    <FontAwesomeIcon icon={faTrash} className='pl-2 pr-2 delete-icon' />
                                                    Remove
                                                </button>                                           
                                        :
                                            null
                                        }
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        </div>       
    )
}

export {EntityTrackerTableDynamic, EntityTrackerTableNextOfKin, AddButton, EntityTrackerTableProperty, EntityTrackerTableBankDetail}
