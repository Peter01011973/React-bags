import React from 'react';
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
import { Track } from './track';
import { Handle } from './handle';
import { Tick } from './tick';
import { connect } from 'react-redux';
import { RootState } from '../../../store/storeConfig';
import { mintcream } from 'color-name';

const sliderStyle: React.CSSProperties = {
    margin: '5%',
    position: 'relative',
    width: '90%'
  };
  
  const railStyle: React.CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: 14,
    borderRadius: 7,
    cursor: 'pointer',
    backgroundColor: 'rgb(155,155,155)'
  };
  
  const domain: number[] = [100, 500];

interface Props {
    
}

const PriceSlider: React.FC<Props> = (props: Props) => {
    const onChange = () => console.log('onChange');
    

    return (
      <div style={{ height: 120, width: '100%' }}>
        <Slider
          mode={1}
          step={1}
          domain={domain}
          rootStyle={sliderStyle}
          onChange={onChange}
          values={[150, 400]}
        >
          <Rail>
            {({ getRailProps }) => (
              <div style={railStyle} {...getRailProps()} />
            )}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
          <Ticks count={10}>
            {({ ticks }) => (
              <div className="slider-ticks">
                {ticks.map(tick => (
                  <Tick key={tick.id} tick={tick} count={ticks.length} />
                ))}
              </div>
            )}
          </Ticks>
        </Slider>
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        // pricesMM : 
    }
}

export default connect(mapStateToProps)(PriceSlider)
