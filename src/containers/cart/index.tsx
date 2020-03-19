import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { RootState } from '../../store/storeConfig'
import { getBagsFromCart, numberItemsInCart, ammountInCart } from '../../store/bagsCart/selectors'
import { BagI } from '../../interfaces';
import './cart.css';
import numberWithThousands from '../../components/utils/numberWithThousandsSeparators';
import { addBagToCart, removeBagFromCart, deleteBagFromCart } from '../../store/bagsCart/actions';
import { selectBags } from '../../store/bags/selectors';
import IconBtn from '../../components/UI/iconBtn';

interface Props {
    cart: BagI[],
    itemsInCart: number,
    sumInCart: number,
    bags: BagI[]
}

const Cart: React.FC<Props> = ({ cart, sumInCart, itemsInCart, bags }) => {
    const dispatch = useDispatch();
    
    const addToCartHandler = (bag: BagI) => dispatch(addBagToCart(bag))
    const removeFromCartHandler = (bag: BagI) => dispatch(removeBagFromCart(bag))
    const deleteFromCartHandler = (bag: BagI) => dispatch(deleteBagFromCart(bag))

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

                    return (
                        <tr key={id}>
                            <td>{index + 1}</td>
                            <td><img className='cartTable__image' src={process.env.PUBLIC_URL + photo1.photoTI} alt='a bag looks awesome' /></td>
                            <td>{name}</td>
                            <td>{numberWithThousands(price)}</td>
                            <td>
                                <IconBtn 
                                    iconType='plus' 
                                    disabled={((quantity - (inCart as number)) === 0)} 
                                    onClickHandler = {addToCartHandler.bind(null, bag)}
                                />
                                    {inCart}
                                <IconBtn 
                                    iconType='minus' 
                                    disabled={((inCart as number) === 0)} 
                                    onClickHandler = {removeFromCartHandler.bind(null, bag)}
                                />
                            </td>
                            <td>{numberWithThousands(price * (inCart as number))}</td>
                            <td><i className="fa fa-trash delete" onClick={() => deleteFromCartHandler(bag)}></i></td>
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
