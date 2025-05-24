const express = require("express");
const crypto = require("crypto");

const app = express();
app.use(express.json());

const urlStore = {}; // Temporary in-memory storage

app.post("/shorten", (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "URL is required" });

  const shortId = crypto.randomBytes(3).toString("hex");
  urlStore[shortId] = url;

  res.json({ short_url: `http://localhost:3000/${shortId}` });
});

app.get("/:shortId", (req, res) => {
  const originalUrl = urlStore[req.params.shortId];
  if (!originalUrl) return res.status(404).json({ error: "Not found" });

  res.redirect(originalUrl);
});

app.listen(3000, () => console.log("URL Shortener API running on port 3000"));