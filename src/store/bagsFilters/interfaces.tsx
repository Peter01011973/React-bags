export interface MinMaxPriceI {
    minSet?: number,
    maxSet?: number,
    min: number,
    max: number
}

export interface BrandFilterI {
    brand: string,
    filter: boolean
}

export interface ColorFilterI {
    color: string,
    filter: boolean
}

export interface FilterI{
    pricesMM: MinMaxPriceI,
    brands: BrandFilterI[],
    colors: ColorFilterI[],
    prices: number[],
    isLoading: boolean
}