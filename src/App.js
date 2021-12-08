import React,{useEffect , useState} from 'react';
import './App.css';
import Login from './components/login/Login';
import { getTokenfromURL } from './components/Soptify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player/player';
import { useDataLayerValue } from './DataLayer';



const spotify= new SpotifyWebApi();
function App() {
  //const[token,settoken] = useState(null);
  const[{user , token},dispatch] = useDataLayerValue();
  useEffect(()=>{
    const hash = getTokenfromURL();
    window.location.hash="";
    const _token =hash.access_token;

    if(_token){
     // settoken(_token)
    
      dispatch({
          type:"SET_TOKEN",
          token:_token
          
        });

      spotify.setAccessToken(_token)
      // get the user in datalayer for CONTEXT API
      spotify.getMe().then((user)=>{
        dispatch({
          type:"SET_USER",
          user:user
        });
      });

      // get the playlis from Spotfiy in datalayer for CONTEXT API
      
        spotify.getUserPlaylists().then((playlists)=>{
          console.log("get APP.JS playlists", playlists.items);
          dispatch({
            type:'SET_PLAYLISTS',
            playlists:playlists
          })
        });

        spotify.getPlaylist('34JEI1ewT6H1zOtdgAOB4e').then((res)=>{
          console.log("get APP.JS disc", res.description);
          dispatch({
            type:'SET_DISCOVER_WEEKLY',
            discover_weekly:res
          })
        });
    }
  },[])

 

  return (
    <div className="app">
    
      { token?(<Player spotify={spotify}></Player>):(<Login></Login>)}
      

    </div>
  );
}

export default App;
