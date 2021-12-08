import React from 'react'
import { useDataLayerValue } from '../../../DataLayer';
import './SideBarOption.css'

function SideBarOption({text , Icon}) {
    //const[{playlists},dispatch]=useDataLayerValue();
    return (
        <div className="side_option">
            {Icon && <Icon className="side_option_icon"></Icon>}
            {Icon? <h4>{text}</h4> : <p> {text}</p>}
            
            
        </div>
    )
}

export default SideBarOption
