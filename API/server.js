const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// TODO uncomment ALL

// const logger = require('../middleware/logger');

// const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../user/user-router.js");
// const postsRouter = require('../posts/post-router');

const server = express();

server.use(helmet());
// server.use(logger);
server.use(express.json());
server.use(cors());

// server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
// server.use('/api/posts', postsRouter);

server.get("/", (req, res) => {
  res.send("<h1>🚀</h1>");
});

module.exports = server;