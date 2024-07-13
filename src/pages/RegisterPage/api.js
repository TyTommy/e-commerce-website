import axios from "axios";
import { REGISTER_URL } from "../../urls";

export const registerUser = ({ email, password }) =>
  axios.post(REGISTER_URL, { email, password });
