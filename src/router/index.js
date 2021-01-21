import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import Layout from '../site/layout'
import ButtonPage from '../site/pages/Button'
import Index from '../site/pages/Index'
import SelectPage from '../site/pages/Select'
import InputPage from '../site/pages/Input'
import IconPage from '../site/pages/Icon'
import GridPage from '../site/pages/Grid'
import DividerPage from '../site/pages/Divider'
import CheckboxPage from '../site/pages/Checkbox'
import RadioPage from '../site/pages/Radio'
import TablePage from '../site/pages/Table'
function AppRouter(props) {
  return (

    <Switch>
      <Route exact path='/button' render={(props)=><Layout {...props}><ButtonPage/></Layout>}/>
      <Route exact path='/icon' render={(props)=><Layout {...props}><IconPage/></Layout>}/>
      <Route exact path='/index' render={(props)=><Layout {...props}><p>23</p></Layout>}/>
      <Route exact path='/divider' render={(props)=><Layout {...props}><DividerPage/></Layout>}/>
      <Route exact path='/grid' render={(props)=><Layout {...props}><GridPage/></Layout>}/>
      <Route exact path='/select' render={(props)=><Layout {...props}><SelectPage></SelectPage></Layout>}/>
      <Route exact path='/checkbox' render={(props)=><Layout {...props}><CheckboxPage/></Layout>}/>
      <Route exact path='/radio' render={(props)=><Layout {...props}><RadioPage/></Layout>}/>
      <Route exact path='/input' render={(props)=><Layout {...props}><InputPage/></Layout>}/>
      <Route exact path='/table' render={(props)=><Layout {...props}><TablePage/></Layout>}/>
      <Redirect to="button"/>
    </Switch>

  );
}
export default AppRouter;
