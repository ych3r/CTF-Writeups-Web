import axios from "axios";

const WRITEUPS_API = "http://localhost:4000/api/writeups";

export const createWriteup = async (writeup) => {}

export const findWriteups = async () => {
    const response = await axios.get(WRITEUPS_API);
    const writeups = response.data;
    return writeups;
}

export const deleteWriteup = async (writeup) => {}

export const updateWriteup = async (writeup) => {}