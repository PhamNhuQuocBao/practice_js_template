import axios from "axios";

export const APIs = axios.create({
  baseURL: "https://67b368cf392f4aa94fa71719.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});
