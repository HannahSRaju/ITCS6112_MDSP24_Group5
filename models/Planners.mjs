import axios from 'axios';

// Retrieve all documents in the samplePlanners collection
async function getAllPlanners() {
  try {
    const response = await axios.post('https://us-east-1.aws.data.mongodb-api.com/app/data-qtphn/endpoint/data/v1/action/find', {
      collection: "samplePlanners",
      database: "sampleVendors",
      dataSource: "ClusterHR",
      projection: {}
    }, {
      headers: {
        'Content-Type': 'application/json',
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


/** import mongoose from "mongoose";
import axios from 'axios';

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://hraju:Ponnu1%40as_@clusterhr.o9bpbap.mongodb.net/sampleVendors", { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for the samplePlanners collection
const plannerSchema = new mongoose.Schema({
  _id: String,
  Location: String,
  PlannerName: String,
  NumServices: Number,
  StartingPrice: String,
  Contact: String,
  Webpage: String,
  Review: Number
});

// Create a Mongoose model based on the schema
const Planner = mongoose.model('Planner', plannerSchema);

// Find all documents in the samplePlanners collection
async function getAllPlanners() {
  try {
    const response = await axios.post('https://us-east-1.aws.data.mongodb-api.com/app/data-qtphn/endpoint/data/v1/action/find', {
      collection: "samplePlanners",
      database: "sampleVendors",
      dataSource: "ClusterHR",
      projection: {}
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': '0axBoFkZid887XCA132P9L4Rxd5JboXlqLgythfWtazWxpk8iT7GBTdIpo7BcIuO'
      }
    });

    console.log("All planners:", response.data); // Log the response containing all documents
  } catch (error) {
    console.error("Error retrieving planners:", error);
  }
}

// Call the function to retrieve all planners
getAllPlanners();*/
