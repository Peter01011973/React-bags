import React from 'react'
import { Route } from 'react-router'
import Bags from '../../containers/bags'
import Wallets from '../../containers/wallets'
import Contacts from '../../containers/contacts'
import Comments from '../../containers/comments'

interface Props {
    
}

const Routes: React.FC<Props> = () => {
    return (
        <>
            <Route path = '/bags' component = {Bags}/>
            <Route path = '/walets' component = {Wallets}/>
            <Route path = '/contacts' component = {Contacts}/>
            <Route path = '/comments' component = {Comments}/>
        </>
    )
}
export default Routes
