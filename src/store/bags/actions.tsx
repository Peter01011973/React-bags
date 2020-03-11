import { BagI } from "../../interfaces";
import { ADD_BAGS, ADD_BAGS_SAGA, FETCH_BAGS, ERROR_BAGS, CHANGE_BAGS_LIST_TOTAL_SIZE } from "./types";

export const addBags = (bags: BagI[]) => ({ type: ADD_BAGS, payload: bags });
export const fetchPost = () => ({type: FETCH_BAGS});
export const errorBags = (message: string) => ({type: ERROR_BAGS, payload: message});
export const changeBagsListTotalSize = (totalSize: number) => ({type: CHANGE_BAGS_LIST_TOTAL_SIZE, payload: totalSize});

export const addBagsSAGA = (data: {currentPage: number, pageSize: number}) => ({type: ADD_BAGS_SAGA, payload: data});