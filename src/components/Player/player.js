import React from 'react'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import './player.css'
import SideBar from './sidebar/SideBar'

function Player({spotify}) {
    return (
        <div className="player"> 
        <div className="body_player">
            <SideBar></SideBar> 
            <Body spotify={spotify}></Body>   
        </div>
      
        <Footer></Footer>

        </div>
    )
}

export default Player
