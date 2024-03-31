// import Caterer from "./Caterers.mjs";
import axios from 'axios';

// Find all documents in the sampleCaterers collection
async function getAllCaterers() {
    try {
      const response = await axios.post('https://us-east-1.aws.data.mongodb-api.com/app/data-qtphn/endpoint/data/v1/action/find', {
        collection: "sampleCaterers",
        database: "sampleVendors",
        dataSource: "ClusterHR",
        projection: {}
      }, {
        headers: {
          'Content-Type': 'application/json',
          //'Access-Control-Request-Headers': '*',
          'Access-Control-Allow-Origin': '*',
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
//export {catererData};
console.log("catererData from Caterers.mjs: ", catererData)

/**import mongoose from "mongoose";
// JSON.stringify()
// Connect to MongoDB Atlas
// mongoose.connect("mongodb+srv://hraju:Ponnu1%40as_@clusterhr.o9bpbap.mongodb.net/sampleVendors", { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for the sampleCaterers collection
const catererSchema = new mongoose.Schema({
  _id: String,
  Location: String,
  CatererName: String,
  StartingPrice: String,
  Contact: String,
  Webpage: String,
  Review: Number
});

// Create a Mongoose model based on the schema
const Caterer = mongoose.model('Caterer', catererSchema);
export default Caterer; */

/** // Find all documents in the sampleCaterers collection
async function getAllCaterers() {
  try {
    const response = await axios.post('https://us-east-1.aws.data.mongodb-api.com/app/data-qtphn/endpoint/data/v1/action/find', {
      collection: "sampleCaterers",
      database: "sampleVendors",
      dataSource: "ClusterHR",
      projection: {}
    }, {
      headers: {
        'Content-Type': 'application/json',
        //'Access-Control-Request-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'api-key': '0axBoFkZid887XCA132P9L4Rxd5JboXlqLgythfWtazWxpk8iT7GBTdIpo7BcIuO'
      }
    });

    console.log("All documents:", response.data); // Log the response containing all documents
    return response.data.documents; // Return the documents
  } catch (error) {
    console.error("Error retrieving caterers:", error);
    return []; // Return an empty array in case of error
  }
}

// Call the function to retrieve all caterers and export the data
export const catererData = await getAllCaterers();
console.log("catererData: ", catererData)*/
