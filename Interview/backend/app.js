const express = require("express");
const resumeRoutes = require("./resume");
const dsaRoutes = require("./dsa");
const cors = require("cors");
const userRouter = require("./routes/user.routes.js");
const authRouter = require("./routes/auth.routes.js");
const connectoDB = require("./dbConnect.js");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/resume", resumeRoutes);
app.use("/dsa", dsaRoutes);
app.use("/api/users", userRouter);
app.use("/auth", authRouter);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
