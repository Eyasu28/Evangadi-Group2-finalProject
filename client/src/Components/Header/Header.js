import React, { useEffect,useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './Header.css'
import { UserContext } from '../../context/UserContext';


function Header({ logout }) {
    const [userData, setUserData] = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!userData.user) navigate("/login");
    }, [userData.user, navigate]);
  return (
      <div>
        <div className='header'>
        <div className='navbar navbar-expand-lg fixed-top pt-4'>
            <div className='container'>
                <img className='nav-brand' src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png" alt="" />
                <div className='collapse__items'>
                    <a className='collapse__item' href='https://www.evangadi.com/'>Home</a>
                    <a  className='collapse__item' href='https://www.evangadi.com/explained'>
                        How it Works
                    </a>
                    {/* <a className='login__button'>
                        SIGN IN
                    </a> */}
                    <button onClick={logout} className='login__button'>LogOut</button>
                </div> 
            </div>
        </div>
    </div>  
      </div>
    
  )
}

export default Header;