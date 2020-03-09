import React from 'react'
import Topheader from './top-header'
import Navmenu from './navmenu'

interface Props {
    
}

const Header: React.FC<Props> = () => {
    return (
        <div>
            <Topheader/>
            <Navmenu />
        </div>
    )
}

export default Header
