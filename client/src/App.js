 import React from 'react'
 import "./App.css"
 import { Route } from 'react-router-dom'
 import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'

 import Loginform from './components/Loginform'
import Loginwindow from './components/Loginwindow'

 const App = () => {

    return (
        <>
          <Navbar/>
          <Route exact path="/">
          <Home/>
          </Route>
          
          <Route  path="/login">
          <Login/>
        
          </Route>
    
          <Route  path="/signup">
          <Signup/>
          </Route>

          
          <Route path="/loginwindow">
          <Loginwindow/>
          </Route>
    
          <Route path="/loginform">
          <Loginform/>
          </Route>
        </>
    )
 }

 export default App


//  <Route path="/">
//  <Home/>
//  </Route>

//  <Route path="/login">
//  <Login/>
//  </Route>

//  <Route path="/signup">
//  <Signup/>
//  </Route>
