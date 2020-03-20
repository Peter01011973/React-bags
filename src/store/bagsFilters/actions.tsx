import { MinMaxPriceI, BrandFilterI, FilterI } from "./interfaces";
import { ADD_PRICE_FILTER_ATRIBUTES, ADD_BRAND_FILTER_ATRIBUTES, ADD_FILTERS_SAGA, ADD_FILTERS, START_ADDING_FILTER } from "./types";

export const addPriceFilterAtributes = (prices: MinMaxPriceI) => ({type: ADD_PRICE_FILTER_ATRIBUTES, payload: prices});
export const addBrandFilterAtributes = (brands: BrandFilterI[]) => ({type: ADD_BRAND_FILTER_ATRIBUTES, payload: brands});
export const addFiltersSaga = () => ({type: ADD_FILTERS_SAGA});
export const addFilters = (data: FilterI) => ({type: ADD_FILTERS, payload: data});
export const startAddingFilters = () => ({type: START_ADDING_FILTER});