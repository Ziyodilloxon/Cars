import axios from "axios";

let mainURL = "https://json-api.uz/api/project/cars";
export const axionsClient = axios.create({
  baseURL: mainURL,
});

export default axionsClient;
