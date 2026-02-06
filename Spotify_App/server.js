require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static("public"));

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

app.get("/login", (req, res) => {
  const scope = "user-read-private user-read-email";

  res.redirect(
    "https://accounts.spotify.com/authorize" +
      "?response_type=code" +
      "&client_id=" + CLIENT_ID +
      "&scope=" + encodeURIComponent(scope) +
      "&redirect_uri=" + encodeURIComponent(REDIRECT_URI)
  );
});

app.get("/callback", (req, res) => {
  console.log("CALLBACK ROUTE HIT");
  console.log("QUERY:", req.query);
  res.send("Callback reached");
});



app.get("/me", async (req, res) => {
  const token = req.headers.authorization;

  const response = await axios.get(
    "https://api.spotify.com/v1/me",
    { headers: { Authorization: token } }
  );

  res.json(response.data);
});

app.get("/search", async (req, res) => {
  const { q, token } = req.query;

  const response = await axios.get(
    `https://api.spotify.com/v1/search?q=${q}&type=track`,
    { headers: { Authorization: "Bearer " + token } }
  );

  res.json(response.data);
});
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
console.log("CLIENT_ID:", CLIENT_ID);
console.log("CLIENT_SECRET EXISTS:", !!CLIENT_SECRET);
