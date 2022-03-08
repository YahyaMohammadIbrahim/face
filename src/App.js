

import {Route} from 'react-router-dom';
import './App.css';
import NewCompany from './pages/NewCompany';

import CenteredGrid from './pages/newLoginForm';
import NewUser from './pages/NewUser';
import standardMain from './standardPage/main';



function App() {
  return (
    <div className="App">
    

  <Route  path="/" component={standardMain}/>
  <Route  path="/login" component={CenteredGrid}/>
  <Route path="/newCompany" component={NewCompany}/>
  <Route path="/newUser" component={NewUser}/>

    </div>
  );
}

export default App; 
