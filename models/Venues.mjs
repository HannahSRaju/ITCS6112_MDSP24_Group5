import axios from 'axios';

// Retrieve all documents in the sampleVenues collection
async function getAllVenues() {
  try {
    const response = await axios.post('https://us-east-1.aws.data.mongodb-api.com/app/data-qtphn/endpoint/data/v1/action/find', {
      collection: "sampleVenues",
      database: "sampleVendors",
      dataSource: "ClusterHR",
      projection: {}
    }, {
      headers: {
        'Content-Type': 'application/json',
        'api-key': '0axBoFkZid887XCA132P9L4Rxd5JboXlqLgythfWtazWxpk8iT7GBTdIpo7BcIuO'
      }
    });

    //console.log("All venues:", response.data); // Log the response containing all documents
    return response.data.documents; // Return the venues documents
  } catch (error) {
    console.error("Error retrieving venues:", error);
    return []; // Return an empty array if error occurs
  }
}

// Retrieve and export all venues' data
export const venueData = await getAllVenues();
console.log("venueData: ", venueData);

/** import mongoose from "mongoose";
import axios from 'axios';

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://hraju:Ponnu1%40as_@clusterhr.o9bpbap.mongodb.net/sampleVendors", { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for the sampleVenues collection
const venueSchema = new mongoose.Schema({
  _id: String,
  Location: String,
  VenueName: String,
  GuestCapacity: Number,
  ServiceType: String,
  FacilityType: String,
  StartingPrice: String,
  Contact: String,
  Webpage: String,
  Review: Number
});

// Create a Mongoose model based on the schema
const Venue = mongoose.model('Venue', venueSchema);

// Find all documents in the sampleVenues collection
async function getAllVenues() {
  try {
    const response = await axios.post('https://us-east-1.aws.data.mongodb-api.com/app/data-qtphn/endpoint/data/v1/action/find', {
      collection: "sampleVenues",
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

    console.log("All venues:", response.data); // Log the response containing all documents
  } catch (error) {
    console.error("Error retrieving venues:", error);
  }
}

// Call the function to retrieve all venues
getAllVenues();*/
