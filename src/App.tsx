import React from 'react';
/*import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'*/
import AppRouter from './router/index.js'
interface Itheme{
  [key:string]:any
}
const theme:Itheme = {
  "className":function(suffix:string,custom?:string){
    if(custom) return custom
    return 'sxd-'+ suffix
  },
}
export const ThemeContext = React.createContext(theme.suffix)
function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={theme.className}>
        <AppRouter />
      </ThemeContext.Provider>
    </div>
  );
}
//<FontAwesomeIcon icon ={faCoffee} size="10x"/>
export default App;
