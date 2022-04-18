import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import './SignUp.css'
import Footer from "../../Components/Footer/Footer";

const SignUp = () => {
    const [form, setForm] = useState({});
    const navigate = useNavigate();
    
    //importing global state from context
    const [userData, setUserData] = useContext(UserContext);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //sending data to be registered in database
            await axios.post('http://localhost:4000/api/users', form);

            //once registered the login automatically so send the new user info to be logged in
            const loginRes = await axios.post('http://localhost:4000/api/users/login', {
                email: form.email,
                password: form.password
            });

            // set the global state with the new user info
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user
            });

            //set localStorage with the token
            localStorage.setItem('auth-token', loginRes.data.token);

            //navigate to homepage once the user is signed up
            navigate("/");
        } catch (error) {
            console.log('problem ==>', error.response.data.msg);
        }
    }
    return (
        <div className="main">
            <div className="container">
                <div className="row">
                    <div className='login__c col-sm-12 col-md-6 text-center'>
                        <div className="signup__form">
                    <h3 className="login__title fw-bold">Join the network</h3>
                    <div className='mb-4'>
                                Already have an account?<Link to="/login" className='toggler'>Sign in</Link></div>
                    <form onSubmit={handleSubmit}>
                {/* <label>Email: </label> */}
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                /><br />
               <div className="flex__box">
               <div className="row flexx ps-md-2">
                <input
                    className="input col-sm-12 col-md-6"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                />
                {/* <label>Last Name: </label> */}
                <input
                    className="input col-sm-12 col-md-6 ms-md-3 pl-md-2"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                />
                </div>
               </div>
                {/* <label>User Name: </label> */}
                <input
                    type="text"
                    name="userName"
                    placeholder="User Name"
                    onChange={handleChange}
                /><br />
                {/* <label>Password: </label> */}
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                /><br />
                <button>submit</button>
            </form>
                <div className="mb-4">
                    
            <Link to="/login" className="toggler">Already have an account?</Link>
            </div>
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
            

          
            <div className="footer_sec">
                <Footer />
            </div>
        </div>
    );
};

export default SignUp;
