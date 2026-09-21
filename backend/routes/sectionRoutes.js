const express = require("express");

const {
  heroLayout,
  pricingLayout,
} = require("../data/layouts");

const router = express.Router();

// Temporary in-memory storage
let savedLayout = null;

// Generate section
router.post("/generate", (req, res) => {
  const { prompt } = req.body;

  if (!prompt || typeof prompt !== "string") {
    return res.status(400).json({
      success: false,
      message: "Prompt is required",
    });
  }

  const lowerPrompt = prompt.toLowerCase();

  let layout;

  if (lowerPrompt.includes("pricing")) {
    layout = pricingLayout;
  } else if (lowerPrompt.includes("hero")) {
    layout = heroLayout;
  } else {
    layout = heroLayout;
  }

  res.json({
    success: true,
    prompt,
    layout,
  });
});

// Save edited section
router.post("/save", (req, res) => {
  const { layout } = req.body;

  if (!layout || typeof layout !== "object") {
    return res.status(400).json({
      success: false,
      message: "Valid layout is required",
    });
  }

  savedLayout = layout;

  res.json({
    success: true,
    message: "Changes saved successfully",
    layout: savedLayout,
  });
});

// Get saved section
router.get("/saved", (req, res) => {
  res.json({
    success: true,
    layout: savedLayout,
  });
});

module.exports = router;