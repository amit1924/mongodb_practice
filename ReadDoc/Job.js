import { JobModel } from "../studentSchema.js";

const allDocs = async () => {
  try {
    const result = await JobModel.find();
    console.log(`Database found:${result}`);
    result.forEach((item) => {
      console.log(`Name:${item.name}`);
      console.log(`Experience:${item.experience}`);
      console.log(`Expert:${item.expert}`);
    });
  } catch (err) {
    console.log(erorr);
  }
};

export default allDocs;
