import React from 'react'
import './Login.css'
import img1 from '../images/Spotify-symbol.jpg'
import { loginUrl } from '../Soptify'




function Login() {
    return (
        <div className="login">
            <img src={img1} alt=" logo" />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}
export const spotfiy_image = img1
export default Login
