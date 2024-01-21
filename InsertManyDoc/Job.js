import { JobModel } from "../studentSchema.js";

const ManyDocs = async () => {
  try {
    const m1 = new JobModel({
      name: "Backend",
      experience: 3,
      expert: "Java",
    });
    const m2 = new JobModel({
      name: "DBMS",
      experience: 4,
      expert: "My SQL",
    });
    const m3 = new JobModel({
      name: "WebDesign",
      experience: 5,
      expert: "Adobe Flash",
    });

    const result = await JobModel.insertMany([m1, m2, m3]);
    console.log(result);
  } catch (e) {
    console.log(e.message);
  }
};

export default ManyDocs;
