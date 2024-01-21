import { JobModel } from "./studentSchema.js";

const jobDoc = async () => {
  try {
    const m1 = new JobModel({
      name: "FrontEnd Developer",
      experience: 2,
      expert: "javascript",
    });

    const result = await m1.save();
    console.log(result);
  } catch (e) {
    console.log(e.message);
  }
};

export default jobDoc;
