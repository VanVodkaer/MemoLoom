import { config } from "../config.js";
import axios from "axios";

async function GetListall() {
  const response = await axios({ url: config.apiURL + "api/notedata", method: "GET" });
  return response.data;
}

export { GetListall };
