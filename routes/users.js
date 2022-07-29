const express = require("express");
const { uuid } = require("uuidv4");

const router = express.Router();

const users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuid() });
  res.send(`user with the name ${user.firstName} added to the database! `);
});

module.exports = router;
