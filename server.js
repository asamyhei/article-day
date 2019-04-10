//Install express server
const path = require("path");
const https = require("https");
const fs = require("fs");
const multer = require("multer");

const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const upload = multer({
  dest: (__dirname + "/src/assets"),
});

const handleError = (err, res) => {
  res
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.post("/api/image", upload.single("image" /* name attribute of <file> element in your form */),
  (req, res) => {
    const tempPath = req.file.path;
    const targetPath = path.join(__dirname, "/src/assets/", req.file.originalname);
    fs.rename(tempPath, targetPath, err => {
      if (err) {
        return handleError(err, res);
      }
      res.send(JSON.stringify({path: path.join("/assets/", req.file.originalname)}));
    });
  },
);

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/articles-day"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/articles-day/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
