const express = require("express");
const tasks = require("./routes/tasks");
const app = express();

const connectDB = require("./db/connect");
require("dotenv").config();

const notFound = require("./middleware/not-found");

const port = process.env.port || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    // Listening server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}!`);
    });
  } catch (err) {
    console.log(err);
  }
};

// Middleware
app.use(express.static("./public"));
app.use(express.json());

// servers
app.use("/api/v1/tasks", tasks);

app.use(notFound);

start();
