import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import { UserContext } from '../../context/UserContext';
import './Login.css'

const Login = () => {
    const [userData, setUserData] = useContext(UserContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({});
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            //sending user data to database to be logged in
            const loginRes = await axios.post('http://localhost:4000/api/users/login',
                {
                    email: form.email,
                    password: form.password
                });
            
            //update global state with response from backend(user-info)
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user
            });

            //set localStorage with the token
            localStorage.setItem('auth-token', loginRes.data.token);

            //navigate user to homepage
            navigate('/');
        } catch (err) {
            console.log('problem', err.response.data.msg);
            alert(err.response.data.msg);
        }
    }

    useEffect(() => {
        if (userData.user) navigate('/');
    }, [userData.user, navigate]);

    return (
        <div className='main'>
            
        <div className='container'>
            <div className='row'>
                    <div className='login__c col-sm-12 col-md-6 text-center'>
                            <div className='login__form'>
                                <h3 className='login__title fw-bold'>Login to your account</h3>
                                <div className='mb-4'>
                                Don't have an account?<Link to="/signup" className='toggler'>Create a new account</Link></div>
                                    
                                <form onSubmit={handleSubmit}>
                                    {/* <label>Email: </label> */}
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder='Email address'
                                        onChange={handleChange}
                                    /><br />
                                    {/* <label>Password: </label> */}
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder='Password'
                                        onChange={handleChange}
                                    />
                                    {/* <span class="focus-input"></span>
                                    <span class="fa fa-eye-slash pwd-toggle"></span> */}
                                    {/* <i class="bi bi-eye-slash" id="togglePassword"></i> */}
                                    <br />
                                    <button>Submit</button>
                                </form>
                                <div className='mb-4'> <Link to="/signup" className='toggler'>Create a new account?</Link></div>
                                
                            </div>
                </div>
                <div className='about_ev col-sm-12 col-md-6'>
                    <small className='about'>About</small>
                    <h1 className='about_title'>Evangadi Networks Q&A</h1>
                    <p className='font-p mg-bt-30'>
                        No matter what stage of life you are in, whether you’re just starting elementary school or being promoted to CEO of a Fortune 500 company, you have much to offer to those who are trying to follow in your footsteps.
                    </p>
                    <p className='font-p mg-bt-30'>
                        Wheather you are willing to share your knowledge or you are just looking to meet mentors of your own, please start by joining the network here.  
                    </p>
                    <a className='how_it_works' href='https://www.evangadi.com/explained/'>
                        How IT WORKS
                    </a>
                </div>

            </div>
        </div>

        <div className='footer_sec'>
            <Footer />
        </div>

        </div>

      
    )
}

export default Login;