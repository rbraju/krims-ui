import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8787/krims",
  headers: {
    "Content-type": "application/json"
  }
});