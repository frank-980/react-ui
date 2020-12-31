import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import Layout from '../site/layout'
import ButtonPage from '../site/pages/Button'
import Index from '../site/pages/Index'
function AppRouter() {
  return (
    <Switch>
      <Route exact path='/index' render={()=><Layout><Index/></Layout>}/>
      <Route exact path='/button' render={()=><Layout><ButtonPage/></Layout>}/>
      <Redirect to="index"/>
    </Switch>
  );
}
export default AppRouter;
