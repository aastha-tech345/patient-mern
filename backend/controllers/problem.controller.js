const Problem = require("../models/problem.model");

const createProblem = async (req, res) => {
  try {
    const { name, type, department_id } = req.body;

    // Find the existing problem document if any
    const existingProblem = await Problem.findOne({ department_id });

    if (existingProblem) {
      // If a problem document exists for the department, push the new data into its problemName array
      existingProblem.problemName.push({ name, type });
      await existingProblem.save(); // Save the updated document
      return res.status(200).json({
        success: true,
        message: "Data pushed into the existing problem document successfully",
        data: existingProblem,
      });
    } else {
      // If no problem document exists for the department, create a new one
      const newProblem = await Problem.create({
        problemName: [{ name, type }],
        department_id,
      });
      return res.status(201).json({
        success: true,
        message: "New problem document created successfully",
        data: newProblem,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getProblem = async (req, res) => {
  try {
    const problem = await Problem.find({
      department_id: req.params.id,
    });
    return res.status(200).json({
      success: true,
      message: "Problem found successfully",
      data: problem,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createProblem,
  getProblem,
};
