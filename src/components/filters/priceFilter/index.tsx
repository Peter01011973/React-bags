import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import { MinMaxPriceI } from '../../../store/bagsFilters/interfaces';
import numberWithThousands from '../../utils/numberWithThousandsSeparators';
import './priceFilter.css';

interface Props {
    prices: number[],
    priceMarks: any,
    pricesMM: MinMaxPriceI,
    minPriceChangeHandler: (e:any) => void,
    maxPriceChangeHandler: (e:any) => void,
    sliderChangeHandler: (e: React.ChangeEvent<{}>, newValue: any) => void,
    priceFilterSubmitHandler: (e: any) => void
}

const PriceFilter: React.FC<Props> = ({ maxPriceChangeHandler, minPriceChangeHandler, sliderChangeHandler, priceFilterSubmitHandler, priceMarks, pricesMM, prices }) => {

    const scaleValue = (value: number) => { return 100 * (value - pricesMM.min) / (pricesMM.max - pricesMM.min) }
    const marks = priceMarks.map((mark: any) => ({ ...mark, value: scaleValue(mark.value) }))

    return (
        <div>
            <form className='price-filter' onSubmit={priceFilterSubmitHandler}>
                <FormControl variant="filled" >
                    <InputLabel htmlFor="filled-min-native-simple">min</InputLabel>
                    <Select
                        native
                        value={pricesMM.minSet}
                        onChange={minPriceChangeHandler}
                        inputProps={{
                            name: 'min',
                            id: 'filled-min-native-simple',
                        }}
                    >
                        {prices.map((price: number, index: number) =>
                            (<option key={index} value={price} >{numberWithThousands(price)}</option>)
                        )}
                    </Select>
                </FormControl>
                <div className='priceFilter__submit'>
                    <h2>Price</h2>
                    <Button variant="contained" color="primary" type={"submit"}>select</Button>
                </div> 
                <FormControl variant="filled" >
                    <InputLabel htmlFor="filled-max-native-simple">max</InputLabel>
                    <Select
                        native
                        value={pricesMM.maxSet}
                        onChange={maxPriceChangeHandler}
                        inputProps={{
                            name: 'max',
                            id: 'filled-max-native-simple',
                        }}
                    >
                        {prices.map((price: number, index: number) =>
                            (<option key={index} value={price} >{numberWithThousands(price)}</option>)
                        )}
                    </Select>
                </FormControl>
            </form>
            <Slider
                step={null}
                defaultValue={[scaleValue(pricesMM.min as number), scaleValue(pricesMM.max as number)]}
                value={[scaleValue(pricesMM.minSet as number), scaleValue(pricesMM.maxSet as number)]}
                aria-labelledby="vertical-slider"
                marks={marks}
                onChange={sliderChangeHandler}
            />
        </div>
    )
}

export default PriceFilter
