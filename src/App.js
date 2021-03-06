import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './componentes/Login';
import Registro from './componentes/Registro';
import EncDiabetes from './componentes/EncDiabetes';
import EncAnemia from './componentes/EncAnemia';
import Menu from './componentes/Menu';
import Grafica from './componentes/Chart';
import OMS from './componentes/OMS';
import TestDiabetes from './componentes/TestDiabetes';
import TestAnemia from './componentes/TestAnemia';
import MenuI from './componentes/MenuI';

import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <Router>
        <Route path="/Login" component={Login}>
        <Login/>
        </Route>

        <Route path="/Registro">
        <Registro/>
        </Route>

        <Route path="/EncDiabetes">
        <EncDiabetes/>
        </Route>

        <Route path="/EncAnemia">
        <EncAnemia/>
        </Route>
        
        <Route path="/Menu" >
        <Menu/>
        </Route>

        <Route path="/Grafica">
        <Grafica/>
        </Route>

        <Route path="/OMS">
          <OMS/>
        </Route>

        <Route path="/TestDiabetes">
          <TestDiabetes />
        </Route>
        <Route path="/TestAnemia">
          <TestAnemia/>
        </Route>

        <Route path="/MenuI">
          <MenuI/>
        </Route>

      </Router>
    );
  }
}

export default App;