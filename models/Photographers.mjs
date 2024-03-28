import mongoose from "mongoose";
import axios from 'axios';

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://hraju:Ponnu1%40as_@clusterhr.o9bpbap.mongodb.net/sampleVendors", { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for the samplePhotographers collection
const photographerSchema = new mongoose.Schema({
  _id: String,
  Location: String,
  Photographer: String,
  Style: String,
  StartingPrice: String,
  Contact: String,
  Webpage: String,
  Review: Number
});

// Create a Mongoose model based on the schema
const Photographer = mongoose.model('Photographer', photographerSchema);

// Find all documents in the samplePhotographers collection
async function getAllPhotographers() {
  try {
    const response = await axios.post('https://us-east-1.aws.data.mongodb-api.com/app/data-qtphn/endpoint/data/v1/action/find', {
      collection: "samplePhotographers",
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

    console.log("All photographers:", response.data); // Log the response containing all documents
  } catch (error) {
    console.error("Error retrieving photographers:", error);
  }
}

// Call the function to retrieve all photographers
getAllPhotographers();
