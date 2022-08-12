import React from 'react';
import Cards from './Common/Cards';
import TenantRegistration from './Registration/TenantRegistration';
import house1 from './Assets/mainPageImages/house1.jpg';
import house2 from './Assets/mainPageImages/house2.png';
import house3 from './Assets/mainPageImages/house3.jpeg';
import house4 from './Assets/mainPageImages/house4.jpg';
import './CSS/mainpage.css';
import { Link } from 'react-router-dom';


function MainPage() {
    return ( 
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">

            
            {/* CONTAINER AROUND PROPERTIES */}
             <div className="container p-3 my-4 border rounded-2xl">

        {/* ----------------------------------------------------------------------------------------------------------------- */}
        {/* ----------------------------------------------------------------------------------------------------------------- */}
        {/* IN DEMAND PROPERTY */}
        {/* ----------------------------------------------------------------------------------------------------------------- */}
        {/* ----------------------------------------------------------------------------------------------------------------- */}
              
        <div className="mt-2 text-left ms-4 text-navBarTextColor font-semibold fs-5">In demand Property</div> 

            <div className="row">

                 {/* PROPERTY A */}

                    <Cards img={house1} propertyTitle={'Property A'} />
        
                 {/* PROPERTY B */}
              
                     <Cards img={house2} propertyTitle={'Property B'}/>

            </div>

              

     {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
     {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
     {/* NEW PROPERTY ROW */}
     {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
     {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
          
     <div className="mt-5 text-left ms-4 text-navBarTextColor font-semibold fs-5">New Property</div> 

     <div className="row">

            {/* PROPERTY C */}

                <Cards img={house3} propertyTitle={'Property C'}/>
    

            {/* PROPERTY D */}
                <Cards img={house4} propertyTitle={'Property D'}/>

     </div>


        {/* CLOSING FIRST ROW AND COLUMN DIVS */}
            </div>
        </div>
        
        {/* ------------------------------------------------------------------------------------------------------------- */}
        {/* ------------------------------------------------------------------------------------------------------------- */}
        {/* COLUMN ON RIGHT */}
        {/* ------------------------------------------------------------------------------------------------------------- */}
        {/* ------------------------------------------------------------------------------------------------------------- */}
    
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 my-4">

                    {/* REGISTERING TENANT */}
                    <div className="card rounded-2xl">
                        <div className="card-body py-5">
                            <h4 className="card-title fs-5 text-contentBodyBlueColor text-left">TENANTS</h4>
                            <p className="card-text text-left">To register as a tenant kindly capture your <br />
                            personal information, landlord information <br />
                            and property information
                            </p>
                            <Link to='/tenantRegistration'>
                                <button className="tenantAndLandlordButton py-2 px-4 mt-4 rounded">
                                    Register as a Tenant
                                </button>
                            </Link>
                            
                        </div>
                    </div>


                    {/* REGISTERING LANDLORD */}
                    <div className="card mt-4 rounded-2xl">
                        <div className="card-body py-5">
                            <h4 className="card-title fs-5 text-contentBodyBlueColor text-left">LANDLORD</h4>
                            <p className="card-text text-left">To register as a landlord kindly capture <br />
                            your personal information, and property <br />
                            information
                            </p>
                            <Link to='/landlordRegistration'>
                                <button className="tenantAndLandlordButton px-3 py-2 mt-4 rounded">
                                    Register as a Landlord
                                </button>
                            </Link>
                            
                        </div>
                    </div>


                </div>
            </div>
        </div>
     );
}

export default MainPage;