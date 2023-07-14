import React,{useEffect} from "react";
import './App.css';
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";


function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((authUser) => {
      if(authUser){
        // User is Logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
      else{
        // User is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    }
  },[]);
  console.log(user);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
