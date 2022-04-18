import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Questions from '../../Components/Row/Questions';
import { UserContext } from '../../context/UserContext';
import './Home.css'

const Home = ({ logout }) => {
    const [userData, setUserData] = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!userData.user) navigate("/login");
    }, [userData.user, navigate]);
    return (
        <div className='container'>
            <div className='page__title mb-5'>
                
            <div className='row'>
                
            <div className='col-sm-12 col-md-6'>
                <button className='title__button'>Ask Question</button>
            </div>
            <div className='col-sm-12 col-md-6 welcome'>

            <h5 className='fw-bold'>Welcome:  {userData.user?.display_name}</h5>
            </div>
            </div>
            {/* show username in homepage */}

            {/* logout when the button clicked in which the function comes from app.js */}
            {/* <button onClick={logout}>Log out</button> */}
            </div>
            <h4 className='fw-bold'>Questions</h4>
            <Questions />
        </div>
    )
}

export default Home