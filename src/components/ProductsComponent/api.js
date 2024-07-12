import axios from "axios";
import { PRODUCTS_URL } from "../../urls";

export const fetchProducts = () => axios.get(PRODUCTS_URL);
