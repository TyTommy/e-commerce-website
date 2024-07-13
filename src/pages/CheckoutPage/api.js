import axios from "axios";
import { PRODUCTS_URL } from "../../urls";

export const fetchProduct = (productId) =>
  axios.get(`${PRODUCTS_URL}/${productId}`);
