import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import {Avatar} from '@material-ui/core'
import { useDataLayerValue } from '../../../DataLayer';


function Header() {
    const [{user} ,dispatch] =useDataLayerValue();
    return (
        <div className="header">
            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt=" Momo"></Avatar>
                <h4>{user?.display_name}</h4>
                {console.log("user name" , user?.display_name)}
            </div>
            
            <div className="header_left">
                <SearchIcon></SearchIcon>
                <input placeholder="search for Artists , Album ,Songs" type="text"></input>
            </div>
        </div>
    )
}

export default Header
