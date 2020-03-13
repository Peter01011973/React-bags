import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { RootState } from '../../store/storeConfig'
import { getBagsFromCart, numberItemsInCart, ammountInCart } from '../../store/bagsCart/selectors'
import { BagI } from '../../interfaces';
import './cart.css';
import numberWithThousands from '../../components/utils/numberWithThousandsSeparators';
import { addBagToCart } from '../../store/bagsCart/actions';

interface Props {
    cart: BagI[],
    itemsInCart: number,
    sumInCart: number
}

const Cart: React.FC<Props> = ({ cart, sumInCart, itemsInCart }) => {
    const dispatch = useDispatch();

    const addToCartHandler = (bad: BagI) => {
        dispatch(addBagToCart(bad))
    }
    const removeFromCartHandler = (bag: BagI) => console.log(bag.id);

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
                    const { id, photo1, name, inCart, price } = bag;
                    return (
                        <tr key={id}>
                            <td>{index + 1}</td>
                            <td><img className='cartTable__image' src={process.env.PUBLIC_URL + photo1.photoTI} alt='a bag looks awesome' /></td>
                            <td>{name}</td>
                            <td>{numberWithThousands(price)}</td>
                            <td>
                                <i className="fa fa-plus-circle plus" onClick={() => addToCartHandler(bag)} ></i>
                                    {inCart}
                                <i className="fa fa-minus-circle minus" onClick={()=>removeFromCartHandler(bag)}></i>
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
