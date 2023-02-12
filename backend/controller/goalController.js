const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

// desc    Get Goals
// route   Get api/goals
// access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

// desc    Set Goals
// route   Post api/goals
// access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text feild");
  }

  res.status(200).json({ message: "Set Goal" });
});

// desc    Update Goals
// route   Put api/goals
// access  Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` });
});

// desc    Delete Goals
// route   Delete api/goals
// access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
