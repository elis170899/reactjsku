import React, {useState, createContext, useReducer} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
import HookReducer from './Component/Hooks/Functional/HookReducer';
import Tagihan from './Component/Fungsional/Tagihan';
import Classes from './Component/Fungsional/Classes';
import Teachers from './Component/Fungsional/Teachers';
import Gallery from './Component/Fungsional/Gallery';
import Contact from './Component/Fungsional/Contact';
import Login from './Component/Fungsional/Login';

export const keranjangContext = createContext()

const initialState = {
  jumlah : 1,
  hargasatuan : 10000,
  hargatotal : 10000
}

const reducer = (state,action) => {
  switch (action. type) {
      case 'tambah': return {
          ...state,
          jumlah: state.jumlah + 1,
          hargatotal: state.hargasatuan + (state.hargasatuan * state.jumlah )
      }
      case 'kurang' : return {
          ...state,
          jumlah: state.jumlah - 1,
          hargatotal: (state.hargasatuan + state.jumlah) - state.hargasatuan
      }
      default :
          return state
  }
}


//import Parent from './Component/Class/Parent';
//import logo from './logo.svg';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';
//import './App.css';

const App = () => {

  const [value, setValue] = useState(0)

  const[count,dispatch] = useReducer(reducer, initialState)

  return (
    <BrowserRouter >
      <CartContext.Provider value={{value, setValue}}>

        <NavbarComp />
        <keranjangContext.Provider value={{keranjangState: count, keranjangDispatch:dispatch}}>
        <switch >
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/classes" component={Classes} />
          <Route exact path="/teachers" component={Teachers} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />


          {/* <Route exact path="/detail/:id"component={DetailComp}/> */}
        </switch>
        </keranjangContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>



  );
}

export default App;