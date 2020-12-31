import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import Layout from '../site/layout'
import ButtonPage from '../site/pages/Button'
import Index from '../site/pages/Index'
function AppRouter(props) {
  return (

    <Switch>
      <Route exact path='/index' render={(props)=><Layout {...props}><p>23</p></Layout>}/>
      <Route exact path='/button' render={(props)=><Layout {...props}><ButtonPage/></Layout>}/>
      <Redirect to="index"/>
    </Switch>

  );
}
export default AppRouter;
