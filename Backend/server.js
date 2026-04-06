const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });
const path = require("path");


const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const courseRoutes = require("./src/routes/course.routes");

const app = express();

 
connectDB();

app.use(cors());
app.use(express.json());



// serve images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.use("/api/courses", courseRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});