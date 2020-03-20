import { RootState } from "../storeConfig";

export const prices = (state: RootState) => state.filters.prices;
export const pricesMM = (state: RootState) => state.filters.pricesMM;
export const isLoadingFilters = (state: RootState) => state.filters.isLoading;