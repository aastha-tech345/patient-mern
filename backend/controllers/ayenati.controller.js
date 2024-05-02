const ayenatiDataModel = require("../models/ayenatiData.model");

const createData = async (req, res) => {
  try {
    let bodyData = req.body;
    const ayenatiData = await ayenatiDataModel.create({
      ayenatiData: bodyData,
    });

    return res.status(200).json({
      success: true,
      message: "HL7 message is created and stored in database",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

const getData = async (req, res) => {
  try {
    const data = await ayenatiDataModel.find();
    const reverseData = data.reverse();
    return res.status(200).json({
      success: true,
      data: reverseData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

module.exports = {
  createData,
  getData,
};
