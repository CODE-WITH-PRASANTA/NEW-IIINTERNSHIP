const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });
const path = require("path");


const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const courseRoutes = require("./src/routes/course.routes");
const viRoutes = require("./src/routes/virtualInternship.routes");
const categoryRoutes = require("./src/routes/category.routes");
const projectRoutes = require("./src/routes/project.routes");
const noticeRoutes = require("./src/routes/notice.routes")
const authRoutes = require("./src/routes/adminAuth.routes")
const carreierRoutes = require("./src/routes/carreier.routes");
const applicationRoutes = require("./src/routes/application.routes");
const app = express();


connectDB();

app.use(cors());
app.use(express.json());



// serve images

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/courses", courseRoutes);
app.use("/api/virtual-internships", viRoutes);
app.use("/api/categories", categoryRoutes); // ✅ better naming
app.use("/api/projects",projectRoutes);
app.use("/api", categoryRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/carreier", carreierRoutes);
app.use("/api/application", applicationRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});