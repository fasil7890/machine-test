import React from 'react';
import {AiFillGoogleCircle} from "react-icons/ai"
import {IoLogoFacebook} from "react-icons/io";
import {CiLinkedin} from "react-icons/ci";
import {RxTwitterLogo} from "react-icons/rx";
import "./SignIn.css";
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='sign-in-page'>
     <div className="sign-in-details">
      <h1>Sign In</h1>
      <div className="sign-in-link">
      <p>New user? </p>
      <p className='sign-in-blue'>Create an account</p>
      </div>
      
      <form>
        <div className="sign-in-input">
        <input className='sign-in-input-text' type="text" placeholder='Username or email' />
        <input className='sign-in-input-text' type="password" placeholder='password' />
        </div>
        <div className="sign-in-checkbox">
        <input type="checkbox" />
        <label>keep me signed in</label>
        </div>
        
      
        <Link to="/home" className='sign-in-link-tag'> <button>Sign In</button></Link>
        <div className="sign-in-row">
        <hr  className='sign-in-rotated-line'/>
        <p>or sign in with</p>
        <hr className='sign-in-rotated-line' />
        </div>
        
        <div className="sign-in-icons">
        <AiFillGoogleCircle/>
        <IoLogoFacebook/>
        <CiLinkedin/>
        <RxTwitterLogo/>
        </div>
        
      </form>
     </div>
     <div className="sign-in-image">
      <img className='sign-in-image-size' src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000" alt="login" />
     </div>
    </div>
  )
}

export default SignIn