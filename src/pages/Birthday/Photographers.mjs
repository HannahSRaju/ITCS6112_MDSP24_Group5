import axios from 'axios';

// Retrieve all documents in the samplePhotographers collection
async function getAllPhotographers() {
  try {
    const response = await axios.post('https://cors-anywhere-ssdi-dd15c12999fc.herokuapp.com/https://us-east-1.aws.data.mongodb-api.com/app/data-qtphn/endpoint/data/v1/action/find', {
      collection: "samplePhotographers",
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

    //console.log("All photographers:", response.data); // Log the response containing all documents
    return response.data.documents; // Return the photographers documents
  } catch (error) {
    console.error("Error retrieving photographers:", error);
    return []; // Return an empty array if error occurs
  }
}

// Retrieve and export all photographers' data
export const photographerData = await getAllPhotographers();
console.log("photographerData: ", photographerData);