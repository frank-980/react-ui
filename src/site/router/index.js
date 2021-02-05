import {Switch,Route,Redirect,useLocation} from 'react-router-dom'
import sidebar from './routes'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
function AppRouter() {
  let location = useLocation()
  return (
      <TransitionGroup className={'router-wrapper'}>
        <CSSTransition timeout={700} classNames="star" key={location.pathname}> 
          <Switch>    
            { sidebar.map((item)=>{
              return item.children.map(item2=>{
                return ( <Route exact path={item2.path} component={item2.component}/> )
              })
            }) } 
            <Redirect to="button"/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
  );
}
export default AppRouter;
