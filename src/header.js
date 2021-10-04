import React from "react";
import logo from "../src/images/logo.png";
import "./header.css";
import { BiBasket } from "react-icons/bi";
import { AiFillExclamationCircle, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useStateValue } from "./stateprovider";
import { auth } from "./firebase";
const Header = () => {
  const [{basket, user}, dispatch] = useStateValue();
  //for adding product counter working on header in basket
  const handleAuthentication = ()=>{
    if(user){
      auth.signOut();
    }
  }
 
  return (
    <header className="header">
      <div className="brandlogo">
        <Link to="/">
          <img src={logo} class="img-fluid logo"></img>
        </Link>
      </div>
      <div className="search">
        <input type="text" className="search_input"></input>
        <AiOutlineSearch className="searchicon" />
      </div>
      <div className="navigation">
        <div onClick={handleAuthentication} className="nav_option">
          <span className="line_one">Hello {!user?'Guest': user.email}</span>
         
          <Link to={!user && './login'}>
          <span className="line_two" style={{ color: "#fff" }}>{user ? 'Sign Out':'Sign in'}</span>
          </Link>
        </div>
        <div className="nav_option">
          <span className="line_one">Return</span>
          <span className="line_two">& Order</span>
        </div>
        <div className="nav_option">
          <span className="line_one">Your</span>
          <span className="line_two">Prime</span>
        </div>
        <div className="nav_option_basket">
          <Link to="/checkout">
            <BiBasket style={{ color: "#fff" }} />
          </Link>
          <span className="line_two counter">{basket?.length}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
