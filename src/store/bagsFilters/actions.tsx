import { MinMaxPriceI, BrandFilterI, FilterI } from "./interfaces";
import { ADD_PRICE_FILTER_ATRIBUTES, ADD_BRAND_FILTER_ATRIBUTES, ADD_FILTERS_SAGA, ADD_FILTERS, START_ADDING_FILTER, SET_MIN_PRICE, SET_MAX_PRICE } from "./types";

export const addPriceFilterAtributes = (prices: MinMaxPriceI) => ({type: ADD_PRICE_FILTER_ATRIBUTES, payload: prices});
export const addBrandFilterAtributes = (brands: BrandFilterI[]) => ({type: ADD_BRAND_FILTER_ATRIBUTES, payload: brands});
export const addFiltersSaga = () => ({type: ADD_FILTERS_SAGA});
export const addFilters = (data: FilterI) => ({type: ADD_FILTERS, payload: data});
export const startAddingFilters = () => ({type: START_ADDING_FILTER});
export const setMinPrice = (min: number) => ({type: SET_MIN_PRICE, payload: min})
export const setMaxPrice = (max: number) => ({type: SET_MAX_PRICE, payload: max})