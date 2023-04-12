import axios from "axios"

export const api = axios.create({
    baseUrl: "https://api.randomuser.me/?results=3",
  });

