const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 5001;

// cors 미들웨어
app.use(
  cors({
    origin: [],
    methods: "GET, POST, DELETE, PATCH, OPTIONS",
    credentials: true,
  })
);

// body-parser 미들웨어
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send("Root Path");
});

app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
