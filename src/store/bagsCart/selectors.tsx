import { RootState } from "../storeConfig";

export const numberItemsInCart = (state: RootState) => state.cart.bags.length;
export const ammountInCart = (state: RootState) => state.cart.bags.reduce((sum, bag) => sum + bag.price, 0);