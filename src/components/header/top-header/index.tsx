import React from 'react';
import './top-header.css'

interface Props {
    
}

const Topheader: React.FC<Props> = () => {
    return (
        <div className ='topHeader'>

            <div className = 'topHeader__logo'>
                <img src="https://mega-sumka.com/image/catalog/441155.png" alt="mega-sumka" />
            </div>

            <div className = 'topHeader__cart'>
                <button className='topHeaderBtn'><i className ="fa fa-shopping-cart" aria-hidden="true"></i></button>
            </div>
            
            <div className='topHeader__search'>
                <input type='text' placeholder = 'searching product...'></input>
                <button className='topHeaderBtn'><i className="fa fa-search" aria-hidden="true"></i></button>
            </div>
            
        </div>
    )
}

export default Topheader
