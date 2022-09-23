/**
 * @author Mesh
 * @classdesc
 * API utility to make all API requests for the landlord.
 * Contains @function ApiUtil to make get requests required in the form
 * Contains @function updateAttachments to get add the fetched attachment drscriptions to state
 * Contains @function PostFile to post an uploaded file to storage
 * Contains @function PostLandlord to post landlord information to the Backend service
 */

import axios from 'axios';

/**
 * @link host base URl to which API calls are made
 */
const host = 'https://pmr-dev.k8s.tracom.co.ke:8445/rest';

/** 
 * @function ApiUtil get all required data for the form and save them to state
 * @param {function} setCountries - Sets its aguments to the couuntries state
 * @param {function} setIdDocuments - Set fetched documents to documents state
 * @param {function} setPropertyTypes - Set fetched Property types to Property types state
 * @param {function} setBedrooms - Set fetched bedrooms to bedroom state
 * @param {function} setBanks - Set fetched banks to Banks state
 * @param {function} setRegions - Set fetched regions to regions state
 * @param {function} setProviders - Set fetched providers to providers state
 * @param {function} updateAttachmentFiles- Update the fetched document types to global state
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

/**
 * @function updateAttachments update global reducer state of landlord's attachmentFiles property
 * @param {function} updateAttachmentFiles  update global state of the landlord
 * @param {object} documentTypes data of the required documents to be uploaded
 */
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

/**
 * @function PostFile post a file to REST and awat a response
 * @param {object} formData Form data object for posting to files API endpoint
 * @returns Promise with the file reference link
 */
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

/**
 * @function PostLandlord posts landlord data to backend
 * @param {object} currentState the current global reducer state of the landlord
 * @returns Promise of either success or failure response
 */
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
export {ApiUtil, PostLandlord, PostFile}