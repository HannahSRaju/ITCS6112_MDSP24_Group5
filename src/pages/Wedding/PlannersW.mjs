/** import axios from 'axios';

// Retrieve all documents in the samplePlanners collection
async function getAllPlanners() {
  try {
    const response = await axios.post('https://cors-anywhere-ssdi-dd15c12999fc.herokuapp.com/https://us-east-1.aws.data.mongodb-api.com/app/data-qtphn/endpoint/data/v1/action/find', {
      collection: "samplePlanners",
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

    //console.log("All planners:", response.data); // Log the response containing all documents
    return response.data.documents; // Return the planners documents
  } catch (error) {
    console.error("Error retrieving planners:", error);
    return []; // Return an empty array if error occurs
  }
}

// Retrieve and export all planners' data
export const plannerData = await getAllPlanners();
console.log("plannerData: ", plannerData);
*/