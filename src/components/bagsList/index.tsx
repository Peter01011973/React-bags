import React from 'react';
import { BagI } from '../../interfaces';
import Bag from './bag';
import './bagList.css';
import Filters from '../filters';
interface Props {
    bags: BagI[],
    isLoading: boolean,
    isError: boolean,
    pageSize: number,
    currentPage: number,
    addToCart: (event: any, bag:BagI) => void,
    bagInfo: (id: number) => void
}

const BagsList: React.FC<Props> = ({bags, isLoading, isError, pageSize, currentPage, addToCart, bagInfo}) => {
    const renderBags = (!(bags && bags.length > 0 )) ? null : (
        <>
            {bags.map(
                (bag: BagI) => <Bag 
                    key = {bag.id}
                    bag = {bag}
                    addToCart = {addToCart}
                    bagInfo = {bagInfo}
                />
            )} 
        </>
    )
    if (isLoading) return <p>Loading...</p>
    return (
        <div className='bagsContainer'>
            <div className='bagsContainer__filters'>
                <Filters />
            </div>
            <div className='bagsContainer__list'>
                {renderBags}
            </div>
        </div>
    )
}

export default BagsList
