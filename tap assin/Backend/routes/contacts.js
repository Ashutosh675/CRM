const express = require("express");
const router = express.Router();
const db = require("../models/db");

// Add Contact
router.post("/", async (req, res) => {
  const { firstName, lastName, email, phone, company, jobTitle } = req.body;
  try {
    await db.query(
      "INSERT INTO contacts (firstName, lastName, email, phone, company, jobTitle) VALUES (?, ?, ?, ?, ?, ?)",
      [firstName, lastName, email, phone, company, jobTitle]
    );
    res.send("Contact added!");
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get Contacts
router.get("/", async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM contacts");
    res.json(results);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete Contact
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM contacts WHERE id = ?", [id]);
    res.send("Contact deleted!");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
