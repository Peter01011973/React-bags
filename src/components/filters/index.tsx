import React from 'react';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { connect } from 'react-redux';
import { RootState } from '../../store/storeConfig';
import { prices, pricesMM } from '../../store/bagsFilters/selectors';
import { MinMaxPriceI } from '../../store/bagsFilters/interfaces';  

function valuetext(value: number) {
    return `${value}°C`;
}


  
interface Props {
    priceMarks: any,
    pricesMM: MinMaxPriceI
}

const Filters : React.FC<Props> = ({priceMarks, pricesMM}) => {

    const scaleValue = (value: number) => {return 100* (value - pricesMM.min)/(pricesMM.max - pricesMM.min)}
    const marks = priceMarks.map((mark: any) => ({...mark, value: scaleValue(mark.value)})) 
    
    return (
        <>
            <Typography id="vertical-slider" gutterBottom>
                Price
            </Typography>
            <div style = {{ padding: '0 20px'}}>
                <Slider
                    step={null}
                    defaultValue={[scaleValue(pricesMM.min as number), scaleValue(pricesMM.max as number)]}
                    aria-labelledby="vertical-slider"
                    getAriaValueText={valuetext}
                    marks={marks}
                />
            </div>
        </>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        priceMarks: prices(state).map(item => ({value: item, label: item.toString()})),
        pricesMM: pricesMM(state)
    }
}

export default connect(mapStateToProps)(Filters)
