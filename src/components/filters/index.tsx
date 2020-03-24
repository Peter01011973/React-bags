import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { RootState } from '../../store/storeConfig';
import { prices, pricesMM } from '../../store/bagsFilters/selectors';
import { MinMaxPriceI } from '../../store/bagsFilters/interfaces';
import { setMinPrice, setMaxPrice } from '../../store/bagsFilters/actions';
import './filters.css';
import PriceFilter from './priceFilter';
interface Props {
    priceMarks: any,
    pricesMM: MinMaxPriceI,
    prices: number[]
}

const Filters: React.FC<Props> = ({ priceMarks, pricesMM, prices }) => {
    const dispatch = useDispatch();

    const minPriceChangeHandler = (event: any) => {if (event.target.value < (pricesMM.maxSet as number)) dispatch(setMinPrice(event.target.value));}
    const maxPriceChangeHandler = (event: any) => {if (event.target.value > (pricesMM.minSet as number)) {dispatch(setMaxPrice(event.target.value));}}
    const sliderChangeHandler = (event: React.ChangeEvent<{}>, newValue: any) => {
        dispatch(setMinPrice(newValue[0] / 100 * (pricesMM.max - pricesMM.min) + pricesMM.min));
        dispatch(setMaxPrice(newValue[1] / 100 * (pricesMM.max - pricesMM.min) + pricesMM.min));
    }
    const priceFilterSubmitHandler = (e: any) => {
        e.preventDefault();
        for (let element of e.target.elements)
            if (element.tagName === 'SELECT') 
                console.log(element.value);
    }
    

    return (
        <div style={{ padding: '0 20px' }} >
            <PriceFilter 
                prices ={prices}
                priceMarks = {priceMarks}
                minPriceChangeHandler = {minPriceChangeHandler}
                maxPriceChangeHandler = {maxPriceChangeHandler}
                sliderChangeHandler = {sliderChangeHandler}
                pricesMM = {pricesMM}
                priceFilterSubmitHandler = {priceFilterSubmitHandler}
            />
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        priceMarks: prices(state).map(item => ({ value: item, label: item.toString() })),
        pricesMM: pricesMM(state),
        prices: prices(state)
    }
}

export default connect(mapStateToProps)(Filters)
