import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";


function Header() {
  const [{basket, user}, dispatch] = useStateValue();
  // console.log(basket);
  const login = () => {
    if(user){
      auth.Auth.signOut();
    }
  }
  return (
    <nav className='header'>
        <Link to="/">
            <img src='https://dwglogo.com/wp-content/uploads/2016/02/Amazoncom-yellow-arrow.png' 
        className='header_logo' alt=""/>
        </Link>
        <div class="header_search">
            <input type='text' className='header_searchInput' />
            <SearchIcon className="header_searchicon" />
        </div>
        <div className='header_nav'>
          <Link to={!user && "/login"} className='header_link'>
            <div onCLick={login} className='header_option'>
              <span className='header_optionline1'>Hello {user?.email}</span>
              <span className='header_optionline2'>{user ? 'Sign out' : 'Sign in'}</span>
            </div>
          </Link>

          <Link to="/" className='header_link'>
            <div className='header_option'>
              <span className='header_optionline1'>Return</span>
              <span className='header_optionline2'>& order</span>
            </div>
          </Link>

          <Link to="/" className='header_link'>
            <div className='header_option'>
              <span className='header_optionline1'>your</span>
              <span className='header_optionline2'>Prime</span>
            </div>
          </Link>

          <Link to="/checkout" className='header_link'>
            <div className='header_optionbasket'>
              <ShoppingBasketIcon />
              <span className='header_optionline2 header_basketcount'>{basket?.length}</span>
            </div>
          </Link>
        </div>
    </nav>
  )
}

export default Header
