const User = require("../models/user.model");
const sendToken = require("../utils/sendToken");
const path = require("path");
const fs = require("fs");

const createUser = async (req, res) => {
  try {
    const isEmailExists = await User.findOne({ email: req.body.email });

    if (isEmailExists) {
      return res.status(404).json({
        success: false,
        message: "Email Already Exists",
      });
    }

    const user = await User.create(req.body);

    return res.status(201).json({
      success: true,
      message: "User Created Successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
      .select("+password")
      .populate("department_id");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email Not Found",
      });
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
      return res.status(404).json({
        success: false,
        message: "Password Not Matched",
      });
    }

    sendToken(user, 200, res);
  } catch (error) {
    console.log(error);
  }
};

const userUpdate = async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.user.is, req.body, {
      new: true,
    });

    if (!updateUser) {
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User Updated Successfully",
      data: updateUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const uploadPatientReport = (req, res) => {
  // Check if file exists in the request
  try {
    console.log("ashish")
    if (req.fileValidationError) {
      return res.status(400).send({ error: req.fileValidationError.message });
    }
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const fileName = req.file.filename;
    const filePath = req.file.path;
    return res
      .status(200)
      .json({ message: "File uploaded successfully", fileName, filePath });
  } catch (error) {
    console.log("error", error);
  }
};

// const getPatientReport = (req, res) => {
//   try {
//     const { filename } = req.params;
//     const filePath = path.join(process.cwd(), "public", "reports", filename);

//     // Check if the file exists
//     if (!fs.existsSync(filePath)) {
//       return res.status(404).json({
//         code: 404,
//         message: "File not found",
//       });
//     }

//     // Read the file content
//     const fileStream = fs.createReadStream(filePath);

//     // Set the appropriate content type for image files
//     res.setHeader("Content-Type", "image/png"); // Adjust content type based on file type

//     // Pipe the file content to the response
//     fileStream.pipe(res);
//   } catch (error) {
//     console.error("Error in path finding:", error);
//     return res.status(500).json({
//       code: 500,
//       message: "Internal Server Error",
//       error: error.message,
//     });
//   }
// };
const getPatientReport = (req, res) => {
  try {
    const { filename } = req.params;
    const filePath = path.join(process.cwd(), "public", "reports", filename);

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        code: 404,
        message: "File not found",
      });
    }

    // Determine the file extension
    const extension = path.extname(filePath);
    let contentType = "application/octet-stream"; // Default content type

    // Set the appropriate content type based on file extension
    if (extension === ".png") {
      contentType = "image/png";
    } else if (extension === ".jpg" || extension === ".jpeg") {
      contentType = "image/jpeg";
    } else if (extension === ".gif") {
      contentType = "image/gif";
    } else if (extension === ".pdf") {
      contentType = "application/pdf";
    }

    // Read the file content
    const fileStream = fs.createReadStream(filePath);

    // Set the appropriate content type for the file
    res.setHeader("Content-Type", contentType);

    // Pipe the file content to the response
    fileStream.pipe(res);
  } catch (error) {
    console.error("Error in path finding:", error);
    return res.status(500).json({
      code: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  createUser,
  loginUser,
  userUpdate,
  uploadPatientReport,
  getPatientReport,
};
