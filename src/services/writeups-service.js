import axios from "axios";

const WRITEUPS_API = "http://localhost:4000/api/writeups";

export const createWriteup = async (writeup) => {};

export const findWriteups = async () => {
  const response = await axios.get(WRITEUPS_API);
  return response.data;
};

export const deleteWriteup = async (wid) => {
  const response = await axios.delete(`${WRITEUPS_API}/${wid}`);
  return response.data;
};

export const updateWriteup = async (writeup) => {};
