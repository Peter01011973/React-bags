import { BagI } from "../../interfaces";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const addBagToCart = (bag: BagI) => ({ type: ADD_TO_CART, payload: bag });
export const removeBagFromCart = (bag: BagI) => ({type: REMOVE_FROM_CART, payload: bag})