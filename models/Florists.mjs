import mongoose from "mongoose";
import axios from 'axios';

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://hraju:Ponnu1%40as_@clusterhr.o9bpbap.mongodb.net/sampleVendors", { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for the sampleFlorists collection
const floristSchema = new mongoose.Schema({
  _id: String,
  Location: String,
  FloristName: String,
  StartingPrice: String,
  Contact: String,
  Webpage: String,
  Review: Number
});

// Create a Mongoose model based on the schema
const Florist = mongoose.model('Florist', floristSchema);

// Find all documents in the sampleFlorists collection
async function getAllFlorists() {
  try {
    const response = await axios.post('https://us-east-1.aws.data.mongodb-api.com/app/data-qtphn/endpoint/data/v1/action/find', {
      collection: "sampleFlorists",
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

    console.log("All florists:", response.data); // Log the response containing all documents
  } catch (error) {
    console.error("Error retrieving florists:", error);
  }
}

// Call the function to retrieve all florists
getAllFlorists();
