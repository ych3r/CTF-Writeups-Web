import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const CTF_EVENT_API = `${API_BASE}/ctf`;

export const findCTFEvent = async (ctfid) => {
  const response = await axios.get(`${CTF_EVENT_API}/${ctfid}`);
  return response.data;
};
