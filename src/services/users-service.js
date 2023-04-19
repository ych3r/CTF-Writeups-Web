import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const USERS_API = `${API_BASE}/users`;

export const findUsers = async () => {
  const response = await axios.get(USERS_API);
  return response.data;
};

export const deleteUser = async (uid) => {
  const response = await axios.delete(`${USERS_API}/${uid}`);
  return response.data;
};

export const changeRole = async (user) => {
  const response = await axios.put(`${USERS_API}/${user._id}`, user);
  return user;
};
