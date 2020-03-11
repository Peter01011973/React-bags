import React from 'react'
import { BagI } from '../../interfaces'
import Bag from './bag'

interface Props {
    bags: BagI[],
    isLoading: boolean,
    isError: boolean,
    pageSize: number,
    currentPage: number
}

const BagsList: React.FC<Props> = ({bags, isLoading, isError, pageSize, currentPage}) => {
    const renderBags = (!(bags && bags.length > 0 )) ? null : (
        <>
            {bags.map(
                (bag: BagI) => <Bag 
                    key = {bag.id}
                    bag = {bag}
                />
            )} 
        </>
    )
    return (
        <div>
            {renderBags}
        </div>
    )
}

export default BagsList
