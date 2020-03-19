import { RootState } from "../storeConfig";

export const selectBags = (state: RootState) => state.bags.bags;
export const getIsLoading = (state: RootState) => state.bags.isLoading;
export const getError = (state: RootState) => state.bags.error;
export const getPageSize = (state: RootState) => state.bags.pageSize;
export const getCurrentPage = (state: RootState) => state.bags.currentPage;
export const getbagsListTotalSize = (state: RootState) => state.bags.bagsListTotalSize; 
