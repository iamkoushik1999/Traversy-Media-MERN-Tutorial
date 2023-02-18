import axios from "axios";

const API_URL = "/api/goals/";

//create new goals
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const goalService = {
  createGoal,
};

export default goalService;
