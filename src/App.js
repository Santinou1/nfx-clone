import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import Error from "./Error";
import Profile from "./Profile";
import Nav from "./Nav";
import Login from "./Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice"; 

function App() {
  const user = useSelector(selectUser);
const dispatch= useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email:userAuth.email,
        }))
      } else {
        dispatch(logout())
      }
    });
    return unsubscribe;
  }, [dispatch]);
console.log(user)
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="*" element={<Error />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
