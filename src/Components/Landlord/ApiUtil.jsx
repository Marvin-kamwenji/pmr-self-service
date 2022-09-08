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

function ApiUtil(setCountries, setIdDocuments, setPropertyTypes, setBedrooms, setBanks) {
    Promise.all(
        [
            axios.get(`${host}/entities/Country`),
            axios.get(`${host}/entities/IdentificationDocuments`),
            axios.get(`${host}/entities/PropertyType`),
            axios.get(`${host}/entities/Bedroom`),
            axios.get(`${host}/entities/Bank?fetchPlan=bank-fetch-plan`)            
        ]
    )
        .then((response) => {
            setCountries(response[0].data);
            setIdDocuments(response[1].data);
            setPropertyTypes(response[2].data);
            setBedrooms(response[3].data);
            setBanks(response[4].data);
        })
        .catch(error => {
            console.log(error)
        });
}

function PostLandlord(landlordInfo, nextOfKins, bankDetails, properties, attachments){

}
export {ApiUtil, PostLandlord}