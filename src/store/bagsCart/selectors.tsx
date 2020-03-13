import { RootState } from "../storeConfig";

export const numberItemsInCart = (state: RootState) => state.cart.bags.reduce((sum, bag) => sum + bag.inCart, 0);
export const ammountInCart = (state: RootState) => state.cart.bags.reduce((sum, bag) => sum + bag.price*bag.inCart, 0);
export const getBagsFromCart = (state: RootState) => state.cart.bags;