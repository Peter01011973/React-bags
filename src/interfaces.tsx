export interface BagI {
    id: number,
    category: string,
    name: string,
    vendor: string,
    brand: string,
    countryManufacture: string,
    color: string,
    dimensions: string,
    material: string,
    price: number,
    quantity: number,
    photo1: {
        photoTI: string,
        photoFI: string
    },
    photo2: {
        photoTI: string,
        photoFI: string
    }
}