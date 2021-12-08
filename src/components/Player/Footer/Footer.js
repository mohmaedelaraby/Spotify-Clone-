import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import {Grid,Slider} from '@material-ui/core';
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import img1 from "../Footer/nirvana.jpg"


function Footer() {
    
    return (
        <div className="footer">
            <div className="footer_left">
                <img className="Album_logo" src={img1}  alt=""/>
                <div className="footer_singer_info">
                    <h4>The Man who sold the world</h4>
                    <p> Nirvana</p>
                </div>
            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer_green"></ShuffleIcon>
                <SkipPreviousIcon className="footer_Icon"></SkipPreviousIcon>
                <PlayCircleOutlineIcon fontSize="large" className="footer_Icon"></PlayCircleOutlineIcon>
                <SkipNextIcon className="footer_Icon"></SkipNextIcon>
                <RepeatIcon className="footer_green"></RepeatIcon>       
            </div>
            <div className="footer_right">
               
                <Grid container spacing={2}>
                     <Grid item><PlaylistPlayIcon /></Grid>
                     <Grid item> <VolumeDownIcon /></Grid>
                     <Grid item xs><Slider aria-labelledby="continuous-slider" /> </Grid>
                 </Grid>
            </div>
        </div>
    )
}

export default Footer
