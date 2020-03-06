import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/home.js'

export default(
    <Switch>
        <Route exact path='' component={Home}/>
    </Switch>
)