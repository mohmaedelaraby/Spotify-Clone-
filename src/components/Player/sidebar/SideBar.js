import React from 'react'
import './SideBar.css'
import img1 from '../../images/Spotify-symbol.jpg'
import SideBarOption from './SideBarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useDataLayerValue } from '../../../DataLayer';



function SideBar() {

    const[{playlists},dispatch]=useDataLayerValue();

    console.log( "the playlists is" ,playlists);
    return (
        <div className="side_bar"> 
            <img src={img1} className="side_logo"/>
         
            <SideBarOption Icon={HomeIcon} text="Home"></SideBarOption>
            <SideBarOption Icon={SearchIcon} text="Search"></SideBarOption>
            <SideBarOption Icon={PlaylistAddIcon} text="Your Library"></SideBarOption>

            <br/>
            <strong className="sidebar_playlist">PlayList</strong>
            <hr/>

            {
            playlists?.items?.map((playlist)=>(<SideBarOption  text={playlist.name}></SideBarOption>))
            }
          
           
        </div>
    )
}

export default SideBar
