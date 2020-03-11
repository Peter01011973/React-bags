import { BagI } from "../../interfaces";

export interface bagsInitStateI {
    bags: BagI[],
    isLoading: boolean,
    error: boolean,
    pageSize: number,
    currentPage: number,
    bagsListTotalSize: number
}