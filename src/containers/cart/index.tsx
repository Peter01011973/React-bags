import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { RootState } from '../../store/storeConfig'
import { getBagsFromCart, numberItemsInCart, ammountInCart } from '../../store/bagsCart/selectors'
import { BagI } from '../../interfaces';
import './cart.css';
import numberWithThousands from '../../components/utils/numberWithThousandsSeparators';
import { addBagToCart, removeBagFromCart } from '../../store/bagsCart/actions';
import { selectBags } from '../../store/bags/selectors';

interface Props {
    cart: BagI[],
    itemsInCart: number,
    sumInCart: number,
    bags: BagI[]
}

const Cart: React.FC<Props> = ({ cart, sumInCart, itemsInCart, bags }) => {
    const dispatch = useDispatch();
    
    const addToCartHandler = (bag: BagI) => {
        dispatch(addBagToCart(bag))
    }
    const removeFromCartHandler = (bag: BagI) => dispatch(removeBagFromCart(bag))

    const cartTable = (
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>img</th>
                    <th>name</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>sum</th>
                    <th>change</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((bag: BagI, index) => {
                    const { id, photo1, name, inCart, price, quantity} = bag;
                    const plusBtnDisable: boolean = ((quantity - (inCart as number)) === 0);
                    const minusBtnDisable: boolean = ((inCart as number) === 0);
                    const plusBtnClass = plusBtnDisable ? "fa fa-plus-circle plusDisable" : "fa fa-plus-circle plus";
                    const minusBtnClass = minusBtnDisable ? "fa fa-minus-circle minusDisable" : "fa fa-minus-circle minus";
                    return (
                        <tr key={id}>
                            <td>{index + 1}</td>
                            <td><img className='cartTable__image' src={process.env.PUBLIC_URL + photo1.photoTI} alt='a bag looks awesome' /></td>
                            <td>{name}</td>
                            <td>{numberWithThousands(price)}</td>
                            <td>
                                <i className={plusBtnClass} onClick={() => {if (!plusBtnDisable) return addToCartHandler(bag)}} ></i>
                                    {inCart}
                                <i className={minusBtnClass} onClick={()=>removeFromCartHandler(bag)}></i>
                            </td>
                            <td>{numberWithThousands(price * (inCart as number))}</td>
                            <td><i className="fa fa-trash delete"></i></td>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td >Totals</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{itemsInCart}</td>
                    <td>{numberWithThousands(sumInCart)}</td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    )

    return (
        <div className = 'inCart'>
            {cart && cart.length > 0 ? cartTable : null}
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        cart: getBagsFromCart(state),
        itemsInCart: numberItemsInCart(state),
        sumInCart: ammountInCart(state)
    }
}

export default connect(mapStateToProps)(Cart)
