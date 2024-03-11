const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const patientRoutes = require("./routes/patient.routes");
const departmentRoutes = require("./routes/deparment.routes");
const problemRoutes = require("./routes/problem.routes");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api/user", userRoutes);
app.use("/api/patient", patientRoutes);
app.use("/api/department", departmentRoutes);
app.use("/api/problem", problemRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

module.exports = app;
