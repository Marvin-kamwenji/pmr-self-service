import axios from 'axios';

const host = 'https://pmr-dev.k8s.tracom.co.ke:8445/rest';

/** 
    * country
    *identification document
    *property type
    *bedroom
    *region
    *occupancy period
    *disbursement schedule
    *bank
    *service providers
*/

function ApiUtil(setCountries, setIdDocuments, setPropertyTypes, setBedrooms, setBanks, setRegions, setProviders, updateAttachmentFiles) {
    Promise.all(
        [
            axios.get(`${host}/entities/Country`),
            axios.get(`${host}/entities/IdentificationDocuments`),
            axios.get(`${host}/entities/PropertyType`),
            axios.get(`${host}/entities/Bedroom`),
            axios.get(`${host}/entities/Bank?fetchPlan=bank-fetch-plan`),
            axios.get(`${host}/entities/GeographicalRegion`),
            axios.get(`${host}/entities/ServiceProviders`),
            axios.get(`${host}/entities/DocumentType`)            
        ]
    )
        .then((response) => {
            setCountries(response[0].data);
            setIdDocuments(response[1].data);
            setPropertyTypes(response[2].data);
            setBedrooms(response[3].data);
            setBanks(response[4].data);
            setRegions(response[5].data);
            setProviders(response[6].data);
            updateAttachments(updateAttachmentFiles, response[7].data)
        })
        .catch(error => {
            console.log(error)
        });
}

function updateAttachments(updateAttachmentFiles, documentTypes){
    let tempAttachments = [];
    documentTypes.map(
      (docType) => {
        tempAttachments.push(
          {
            attachmentDocumentType:{
              id: docType.id,
              name: docType.documentTypeName
            }
          }
        )
      }
    );
    updateAttachmentFiles(tempAttachments);
}

function PostFile(formData) {
  const postPromise =
    axios
        .post(
            `${host}/files`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            }
        )
  const dataRefPromise = postPromise
        .then((response) => response.data)
        .catch(function (error) {
            console.log(error);
        });

  return dataRefPromise;
}

function PostLandlord(currentState){
    const landlord = {
      landlord: {
        ...currentState.landlordInfo,
        nextOfKin: currentState.nextOfKins,
        bankDetails: currentState.paymentDetails,
        property: currentState.properties,
        attachmentFiles: currentState.attachmentFiles
    }
    }

    const postData = axios.post(`${host}/services/selfOnBoardLandlord/selfOnBoardLandlord`, landlord)
    const postResponsePromise = postData.then((response) => response)
    return postResponsePromise;
}

function TenantApiUtil(
  setCountries, setIdDocuments,
  setEmployerCategory, setContractTypes,
  setBanks, setProviders, setPropertyTypes,
  setBedrooms, setGeographicRegions,
  updateAttachmentFiles){
  Promise.all(
    [
        axios.get(`${host}/entities/Country`),
        axios.get(`${host}/entities/IdentificationDocuments`),
        axios.get(`${host}/entities/EmploymentCategory`),
        axios.get(`${host}/entities/ContractType`),
        axios.get(`${host}/entities/Bank?fetchPlan=bank-fetch-plan`),
        axios.get(`${host}/entities/ServiceProviders`),
        axios.get(`${host}/entities/DocumentType`),
        axios.get(`${host}/entities/PropertyType`),
        axios.get(`${host}/entities/GeographicalRegion`),
        axios.get(`${host}/entities/Bedroom`),            
    ]
)
    .then((response) => {
        setCountries(response[0].data);
        setIdDocuments(response[1].data);
        setEmployerCategory(response[2].data);
        setContractTypes(response[3].data);
        setBanks(response[4].data);
        setProviders(response[5].data);
        updateAttachments(updateAttachmentFiles, response[6].data);
        setPropertyTypes(response[7].data);
        setGeographicRegions(response[8].data);
        setBedrooms(response[9].data);
    })
    .catch(error => {
        console.log(error)
    });
}

function PostTenant(currentState){
  const tenant = {
    tenant: {
      ...currentState.tenantInformation,
      nextOfKin: currentState.nextOfKin,
      bankDetails: currentState.bankDetails,
      employerDetails: currentState.employerDetails,
      landLordInformation: currentState.landLordInformation,
      propertyInformation :currentState.propertyInformation,
      attachmentFiles: currentState.attachmentFiles,
    }   
  }
  const postData = axios.post(`${host}/services/selfOnBoardTenant/selfOnBoard`, tenant)
  const postResponsePromise = postData.then((response) => response)
   return postResponsePromise;


}



export {ApiUtil, PostLandlord, PostFile, TenantApiUtil, PostTenant}