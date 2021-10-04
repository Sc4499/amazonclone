import React, { useEffect } from "react";
import Home from "./home";
import Checkout from "./checkout";
import Header from "./header";
import Login from "./login";
import Payment from "./payment";
import "./App.css";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./stateprovider";
const promise = loadStripe(
  "pk_test_51JgNKYSICEcAEBVydlJoDpmpnJOcJhRsFt9PNkNb5iBwbMIv8n6pK2SJy0279Xdc0GeZJ6mj5SsPvjLpluSKHi4M00wFU02ZiI"  
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("this is the userEvent", authUser);
      if (authUser) {
        //user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user loged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      
      <Switch>
        <Route path="/checkout">
        <Header />
          <Checkout />
        </Route>
        <Route path="/payment">
        <Header />
        <Elements stripe={promise}>
        <Payment />
        </Elements>
          
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
        <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
