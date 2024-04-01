import axios from 'axios';

// Retrieve all documents in the sampleFlorists collection
async function getAllFlorists() {
  try {
    const response = await axios.post('https://cors-anywhere-ssdi-dd15c12999fc.herokuapp.com/https://us-east-1.aws.data.mongodb-api.com/app/data-qtphn/endpoint/data/v1/action/find', {
      collection: "sampleFlorists",
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

    //console.log("All florists:", response.data); // Log all florists data
    return response.data.documents; // Return the florists documents
  } catch (error) {
    console.error("Error retrieving florists:", error);
    return []; // Return an empty array if error occurs
  }
}

// Retrieve and export all florists' data
export const floristData = await getAllFlorists();
console.log("floristData: ", floristData);