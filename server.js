require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileupload = require("express-fileupload");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
  fileupload({
    useTempFiles: true,
  })
);

//Routes
app.use("/user", require("./routes/userRouter"));
app.use("/api", require("./routes/upload"));

//Connect to mongodb
const URI = process.env.MONGODB_URI;
mongoose.connect(
  URI,
  {
    //  useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

/*
app.use('/',(req, res, next) => {
    res.json({msg: "Hello World"})
})
*/

//Port already use err(5000)!

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
