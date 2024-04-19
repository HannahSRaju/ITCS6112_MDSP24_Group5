import axios from 'axios';

// Function to fetch data for a specific collection
export async function getPlannersData(collectionName) {
  try {
    const response = await axios.post('https://cors-anywhere-ssdi-dd15c12999fc.herokuapp.com/https://us-east-1.aws.data.mongodb-api.com/app/data-qtphn/endpoint/data/v1/action/find', {
      collection: "Planners",
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

    return response.data.documents; // Return the documents
  } catch (error) {
    console.error(`Error retrieving data for ${collectionName}:`, error);
    return []; // Return an empty array if error occurs
  }
}

// Call the function to retrieve all planners and export the data
export const allPlannerData = await getPlannersData();
console.log("allPlannerData from PlannersData.mjs: ", allPlannerData)
