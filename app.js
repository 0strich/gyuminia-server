const express = require("express");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const cors = require("cors");
const bodyParser = require("body-parser");

const usersRouter = require("./routes/users");
const charactersRouter = require("./routes/characters");

require("dotenv").config();

const app = express();
const port = 5001;

// MySQLStore Options
const dbOptions = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

// session middleware에 사용할 sessionStore 생성
const sessionStore = new MySQLStore(dbOptions);

// 세션 미들웨어
const sessionMiddleware = session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: false, // http
    maxAge: 36000000, // 단위: ms, 현재: 10시간, 참고(3600000 === 1h)
  },
  store: sessionStore,
});

// cors 미들웨어
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: "GET, POST, DELETE, PATCH, OPTIONS",
    credentials: true,
  })
);

// body-parser 미들웨어
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(sessionMiddleware);

app.use("/users", usersRouter);
app.use("/characters", charactersRouter);

app.get("/", (req, res) => {
  res.status(200).send("Root Path");
});

app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
