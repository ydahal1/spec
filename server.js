const express = require("express");

const connectDB = require("./config/db");

const app = express();

//connect database
connectDB();

//Initialize Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Servr running"));

//Define routes
app.use("/api/registerHuts", require("./routes/api/registerHuts"));
app.use("/api/renderHuts", require("./routes/api/renderHuts"));
app.use("/api/registerUser", require("./routes/api/registerUser"));
app.use("/api/renderUser", require("./routes/api/renderUser"));
app.use("/api/authenticateUser", require("./routes/api/authenticateUser"));
app.use(
  "/api/loggedInUsersDetail",
  require("./routes/api/loggedinUsersDetail")
);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
