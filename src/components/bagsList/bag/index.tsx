import React from 'react';
import { BagI } from '../../../interfaces';
import './bagCard.css';

interface Props {
    bag: BagI
}

const Bag: React.FC<Props> = ({bag}) => {
    const {name, photo1, category, vendor, brand, countryManufacture, color, dimensions, material, price} = bag;
    return (
        <div className = 'bagCard'>
            <div className='bagCard__images'>
                <img src = {process.env.PUBLIC_URL + photo1.photoTI} alt = 'a bag looks awesome'/> 
            </div>
            <div className = 'bagCard__info'>
                <h1 className = 'bagCard__info__title'>{category}: {name}</h1>
                <h3 className = 'bagCard__info__title'>vendor: {vendor}</h3>
                <h3 className = 'bagCard__info__title'>brand: {brand}</h3>
                <h3 className = 'bagCard__info__subtitle'>country manufacture: {countryManufacture}</h3>
                <h3 className = 'bagCard__info__subtitle'>color: {color}</h3>
                <h3 className = 'bagCard__info__subtitle'>dimensions: {dimensions}</h3>
                <h3 className = 'bagCard__info__subtitle'>material: {material}</h3>
                <h1 className = 'bagCard__info__price'>price: {price}</h1>
            </div>
        </div>
    )
}

export default Bag
