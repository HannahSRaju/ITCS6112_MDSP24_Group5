/**import axios from 'axios';

// Find all documents in the sampleCaterers collection
async function getAllCaterers() {
    try {
      const response = await axios.post('https://cors-anywhere-ssdi-dd15c12999fc.herokuapp.com/https://us-east-1.aws.data.mongodb-api.com/app/data-qtphn/endpoint/data/v1/action/find', {
        collection: "sampleCaterers",
        database: "sampleVendors",
        dataSource: "ClusterHR",
        projection: {}
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'api-key': '0axBoFkZid887XCA132P9L4Rxd5JboXlqLgythfWtazWxpk8iT7GBTdIpo7BcIuO'
        }
      });
  
      //console.log("All documents:", response.data); // Log the response containing all documents
      return response.data.documents; // Return the documents
    } catch (error) {
      console.error("Error retrieving caterers:", error);
      return []; // Return an empty array in case of error
    }
  }

// Call the function to retrieve all caterers and export the data
export const catererData = await getAllCaterers();
console.log("catererData from Caterers.mjs: ", catererData)
*/
