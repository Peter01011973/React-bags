import React from 'react';
import './navmenu.css';
import {NavLink} from 'react-router-dom';

interface Props {
    
}

const Navmenu: React.FC<Props> = () => {
    return (
        <div className='navmenu'>
            <ul className='navmenu__list'>
                <li className='navmenu__item'><NavLink to='/bags' activeClassName='active' className='navmenu__link'>bags</NavLink></li>
                <li className='navmenu__item'><NavLink to='/walets' activeClassName='active' className='navmenu__link'>wallets</NavLink></li>
                <li className='navmenu__item'><NavLink to='/contacts' activeClassName='active' className='navmenu__link'>contacts</NavLink></li>
                <li className='navmenu__item'><NavLink to='/comments' activeClassName='active' className='navmenu__link'>comments</NavLink> </li>
            </ul>
        </div>
    )
}

export default Navmenu

