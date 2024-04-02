const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const patientRoutes = require("./routes/patient.routes");
const departmentRoutes = require("./routes/deparment.routes");
const problemRoutes = require("./routes/problem.routes");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // Allow sending cookies and authentication headers
  })
);

app.use("/api/user", userRoutes);
app.use("/api/patient", patientRoutes);
app.use("/api/department", departmentRoutes);
app.use("/api/problem", problemRoutes);

app.use("/", express.static(path.join(__dirname, "/build")));
app.get("/", function (req, res) {
  return res.sendFile(path.join(__dirname, "/build/index.html"));
});
app.get("/*", function (req, res) {
  return res.sendFile(path.join(__dirname, "/build/index.html"));
});

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

module.exports = app;
