import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Error from "./Error"
import Profile from "./Profile"
import Nav from './Nav';
import Login from './Login';

function App() {
  const user=null

  return (

    <div className="app">
        {!user ? (
          <Login/>
        ):(
          <Routes>
          <Route path="/" element={<HomeScreen/>}></Route>
          <Route path="*" element={<Error/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          </Routes>

        )}
    </div>

  );
}

export default App;
