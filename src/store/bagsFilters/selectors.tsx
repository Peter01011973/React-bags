import { RootState } from "../storeConfig";


export const numberItemsInCart = (state: RootState) => state.cart.bags.reduce((sum, bag) => sum + bag.inCart, 0);