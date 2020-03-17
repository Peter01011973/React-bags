import React from 'react';
import { BagI } from '../../../interfaces';
import './bagCard.css';
import numberWithThousands from '../../utils/numberWithThousandsSeparators';
import BagSlider from './bagSlider';

interface Props {
    bag: BagI,
    addToCart: (event: any, bag:BagI) => void,
    bagInfo: (id: number) => void
}

const BagCard: React.FC<Props> = ({bag, addToCart, bagInfo}) => {
    const {name, photo1, photo2, category, vendor, brand, countryManufacture, color, dimensions, material, price, quantity, inCart = 0} = bag;
    return (
        <div className = 'bagCard' >
            {inCart ? <div className = 'incart-overlay'>in cart</div> : null}
            <div className='bagCard__images' onClick={bagInfo.bind(null, bag.id)}>

                <BagSlider image1={photo1} image2 = {photo2}/>
            </div>
            <div className = 'bagCard__info'>
                <h3 className = 'bagCard__info__title'>{category}: {name}</h3>
                <p className = 'bagCard__info__subtitle'>vendor: {vendor}</p>
                <p className = 'bagCard__info__subtitle'>brand: {brand}</p>
                <p className = 'bagCard__info__subtitle'>country manufacture: {countryManufacture}</p>
                <p className = 'bagCard__info__subtitle'>color: {color}</p>
                <p className = 'bagCard__info__subtitle'>dimensions: {dimensions}</p>
                <p className = 'bagCard__info__subtitle'>material: {material}</p>
                <p className = 'bagCard__info__subtitle'>in stock: {quantity}</p>
                <h3 className = 'bagCard__info__price'>price: {numberWithThousands(price)} grn</h3>
                <button 
                    disabled = {quantity === 0}
                    className = 'bagCard__info__btn' 
                    onClick={(event) => addToCart(event, bag)}
                >Add to cart</button>
            </div>
        </div>
    )
}

export default BagCard
