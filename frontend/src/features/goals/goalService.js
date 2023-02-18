import axios from "axios";

const API_URL = "/api/goals/";

//create new goals
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, goalData, config);

  return response.data;
};

// Get new goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user Goal
const deleteGoal = async (GoalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + GoalId, config);

  return response.data;
};

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
};

export default goalService;
