import mongoose from "mongoose";

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
export default Caterer;