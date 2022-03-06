import React from 'react'
import { Switch,Route,Redirect } from 'react-router-dom'
import { Home } from './Home'
import { InfoQuran } from './InfoQuran'
import { Quran } from './Quran'
import { Search } from './Search'
export const Routes = () => {
  return (
    <Switch>

    <Route exact path="/">

    <Redirect to="/Home"></Redirect>
    
    </Route>
    
    <Route path="/Home">
     <Home/>
    </Route>
    <Route path="/Quran">
     <Quran/>
    </Route>
    <Route path="/infoQuran">
     <InfoQuran/>
    </Route>
    <Route path="/Search">
     <Search/>
    </Route>


    </Switch>
  )
}
