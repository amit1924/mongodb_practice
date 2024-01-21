import express from "express";
import connectDB from "./Mongo.js";
import { JobModel } from "./studentSchema.js";
// import jobDoc from "./createDoc.js";
// import ManyDocs from "./InsertManyDoc/Job.js";
import allDocs from "./ReadDoc/Job.js";

const app = express();
const port = 8000;
const URL = "mongodb://localhost:27017/job";

connectDB(URL);

// jobDoc();
// ManyDocs();
allDocs();

app.listen(port, () => {
  console.log(`Port is listening on ${port}`);
});
