import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const WRITEUPS_API = `${API_BASE}/writeups`;

export const createWriteup = async (writeup) => {
  const response = await axios.post(WRITEUPS_API, writeup);
  return response.data;
};

export const findWriteups = async () => {
  const response = await axios.get(WRITEUPS_API);
  return response.data;
};

export const deleteWriteup = async (wid) => {
  const response = await axios.delete(`${WRITEUPS_API}/${wid}`);
  return response.data;
};

export const updateWriteup = async (writeup) => {
  const response = await axios.put(`${WRITEUPS_API}/${writeup._id}`, writeup);
  return writeup;
};
