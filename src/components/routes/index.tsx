import React from 'react'
import { Route, Switch } from 'react-router'
import Bags from '../../containers/bags'
import Wallets from '../../containers/wallets'
import Contacts from '../../containers/contacts'
import Comments from '../../containers/comments'
import { Redirect } from 'react-router-dom'
import Bag from '../../containers/bag'
interface Props {  }

const Routes: React.FC<Props> = () => {
    return (
        <>    
            <Route exact path='/' render = {() => <Redirect from = '/' to = '/bags'/>} />       
            <Switch>               
                <Route exact path='/bags' component={Bags} />
                <Route path='/bags/:id' component={Bag} />
                <Route path='/wallets' component={Wallets} />
                <Route path='/contacts' component={Contacts} />
                <Route path='/comments' component={Comments} />
                <Route render={() => <h1>Page not found</h1>} />
            </Switch>
        </>
    )
}
export default Routes
