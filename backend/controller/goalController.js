// desc    Get Goals
// route   Get api/goals
// access  Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};

// desc    Set Goals
// route   Post api/goals
// access  Private
const setGoal = (req, res) => {
  res.status(200).json({ message: "Set Goal" });
};

// desc    Update Goals
// route   Put api/goals
// access  Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` });
};

// desc    Delete Goals
// route   Delete api/goals
// access  Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
