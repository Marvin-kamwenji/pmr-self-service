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

function ApiUtil(setCountries, setIdDocuments, setPropertyTypes, setBedrooms, setBanks, setRegions, setProviders, setDocumentTypes) {
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
            setDocumentTypes(response[7].data);
        })
        .catch(error => {
            console.log(error)
        });
}

function PostFile(formData) {
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
        .then((response) => {
            console.log(response.data)
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

function PostLandlord(landlordInfo, nextOfKins, bankDetails, properties, attachments, setResponse){
    const landlord = {
        ...landlordInfo,
        nextOfKin: nextOfKins,
        bankDetails: bankDetails,
        property: Array.from(properties,(property,index) => {
            property['bankDetail'] = bankDetails[index]
            return property
        } ),
        attachmentFiles: attachments
    }

    axios.post(`${host}/services/selfOnBoardLandlord/selfOnBoardLandlord`, landlord)
      .then(function (response) {
        console.log(response);
        setResponse(response)
      })
      .catch(function (error) {
        console.log(error);
      });

}
export {ApiUtil, PostLandlord, PostFile}