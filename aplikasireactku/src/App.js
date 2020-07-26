import React, {useState, createContext, useReducer} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
//import BootstrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import HomePage from './Component/Fungsional/HomePage';
import About from './Component/Fungsional/AboutComp';
import {
  Navbar
} from 'reactstrap';
//import DetailComp from './Component/Fungsional/DetailComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import EditComp from './Component/Class/EditComp';
import KelasComp from './Component/Hooks/Class/KelasComp';
import HooksComp from './Component/Hooks/Functional/HookComp';
import HooksUseEffects from './Component/Hooks/Functional/HooksUseEffects';
import { CartContext } from './CartContext';
import ProductComp from './Component/Hooks/Functional/ProductComp';
//import HookReducer from './Component/Hooks/Functional/HookReducer';
//import Tagihan from './Component/Fungsional/Tagihan';
import Classes from './Component/Fungsional/Classes';
import Teachers from './Component/Fungsional/Teachers';
import Gallery from './Component/Fungsional/Gallery';
import Contact from './Component/Fungsional/Contact';
//import Login from './Component/Fungsional/Login';
import LoginComp from './Component/Hooks/LoginComp';

export const AuthContext = createContext()

//inisiasi state
const initalState = {
isAuthenticated: false,
user: null,
token: null
}

const reducer = (state, action) => {
  switch(action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
        }

case "LOGOUT":
  localStorage.clear()
  return {
    ...state,
    isAuthenticated: false,
    user : null
  }

//import Parent from './Component/Class/Parent';
//import logo from './logo.svg';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';
//import './App.css';

default:
  return state
} 
}


function App () {

const[state, dispatch] = useReducer(reducer, initalState)


  return (
    <BrowserRouter >
        <NavbarComp />
        <switch >
        <AuthContext.Provider value= {{
          state,
          dispatch
        }}>

          {!state.isAuthenticated ?
            <Redirect
              to={{
                pathname: "/loginadmin"
              }}
            /> :
            <Redirect
              to={{
                pathname: "/datasiswa"

              }}
            />
          }


          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/classes" component={Classes} />
          <Route exact path="/teachers" component={Teachers} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/loginadmin" component={LoginComp} />
          <Route exact path="/datasiswa" component={ListComp} />
          <Route exact path="/siswa/tambah" component={TambahComp} />
          <Route exact path="/datasiswa/edit" component={EditComp} />



          {/* <Route exact path="/detail/:id"component={DetailComp}/> */}
          </AuthContext.Provider>
        </switch>
    </BrowserRouter>



  );
}

export default App;