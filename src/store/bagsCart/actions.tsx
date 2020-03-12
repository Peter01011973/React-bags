import { BagI } from "../../interfaces";
import { ADD_TO_CART } from "./types";

export const addBagToCart = (bag: BagI) => ({ type: ADD_TO_CART, payload: bag });