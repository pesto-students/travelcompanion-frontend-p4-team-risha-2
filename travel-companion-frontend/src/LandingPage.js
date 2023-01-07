import React from 'react'
import logo from './assests/images/logo.png'; 
import {useNavigate} from 'react-router-dom'

export const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className='banner'>
            <img className="logo" alt="logo" src={logo} />
            <h1>TRAVEL COMPANION</h1>
            <button className='btn login-btns' onClick={() => navigate('preferences')}>Login with google</button>
            <button className='btn login-btns'>Login with facebook</button>
            <button className='btn login-btns'>Login with Apple</button>
            <span>By Signing up, you agree to the travel buddies terms & condition and privacy policy </span>
        </div>)

}

export default LandingPage
