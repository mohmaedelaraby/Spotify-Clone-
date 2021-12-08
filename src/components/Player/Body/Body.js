import React from 'react'
import './Body.css'
import Header from './Header'
import img1 from "../Footer/nirvana.jpg"
import { useDataLayerValue } from '../../../DataLayer'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow'
function Body({spotify}) {
    const[{discover_weekly},dispatch]=useDataLayerValue();
    
    return (
        <div className="body">
            <Header spotify={spotify}></Header>


            <div className="body_info">
                <img src={img1} alt=''></img>
                <div className="body_info_text">
                    <strong>PLAYLIST</strong>
                    <h2>{discover_weekly?.name}</h2>
                    <p>{discover_weekly?.description}</p>
                 </div>
            </div>


            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon className="shuffle"></PlayCircleFilledIcon>
                    <FavoriteIcon fontSize='large'></FavoriteIcon>
                    <MoreHorizIcon></MoreHorizIcon>

                </div>
                {discover_weekly?.tracks.items.map(item=>(<SongRow track={item.track}></SongRow>))}
            </div>
        </div>
    )
}

export default Body
