import axios from 'axios';

// Retrieve all documents in the sampleDecorators collection
async function getAllDecorators() {
  try {
    const response = await axios.post('https://cors-anywhere-ssdi-dd15c12999fc.herokuapp.com/https://us-east-1.aws.data.mongodb-api.com/app/data-qtphn/endpoint/data/v1/action/find', {
      collection: "BirthdayDecorators",
      database: "Vendors",
      dataSource: "ClusterHR",
      projection: {}
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'api-key': '0axBoFkZid887XCA132P9L4Rxd5JboXlqLgythfWtazWxpk8iT7GBTdIpo7BcIuO'
      }
    });

    //console.log("All decorators:", response.data); // Log all decorators data
    return response.data.documents; // Return the decorators documents
  } catch (error) {
    console.error("Error retrieving decorators:", error);
    return []; // Return an empty array if error occurs
  }
}

// Retrieve and export all decorators' data
export const decoratorData = await getAllDecorators();
console.log("decoratorData: ", decoratorData);