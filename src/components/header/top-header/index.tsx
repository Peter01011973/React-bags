import React from 'react';
import './top-header.css'
import { useSelector } from 'react-redux';
import { numberItemsInCart, ammountInCart } from '../../../store/bagsCart/selectors';
import numberWithThousands from '../../utils/numberWithThousandsSeparators';
import { useHistory } from 'react-router-dom';

interface Props {
    
}

const Topheader: React.FC<Props> = () => {
    const itemsInCart = useSelector(numberItemsInCart);
    const sumInCart = useSelector(ammountInCart);
    const history = useHistory();

    const signInBtn = itemsInCart ? <span className='signInBtn'> ( {itemsInCart} {itemsInCart === 1 ? 'item' : 'items'}, {sumInCart ? numberWithThousands(sumInCart)+' grn' : null}) </span> : null

    return (
        <div className ='topHeader'>
            <div className = 'topHeader__logo'>
                <img src="https://mega-sumka.com/image/catalog/441155.png" alt="mega-sumka" />
            </div>
            <div className = 'topHeader__cart'>
                <button className='topHeaderBtn' onClick = {()=>history.push('/cart')}>
                    <i className ="fa fa-shopping-cart" aria-hidden="true"></i>{signInBtn}
                </button>
            </div>            
            <div className='topHeader__search'>
                <input type='text' placeholder = 'searching product...'></input>
                <button className='topHeaderBtn'><i className="fa fa-search" aria-hidden="true"></i></button>
            </div>
            
        </div>
    )
}

export default Topheader
