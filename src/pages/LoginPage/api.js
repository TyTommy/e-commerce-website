import axios from "axios";
import { LOGIN_URL } from "../../urls";

export const loginUser = ({ email, password }) =>
  axios.post(LOGIN_URL, { email, password });
