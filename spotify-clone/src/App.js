import React ,{ useEffect,useState } from 'react';

import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify';
import Player from './Player';
import SpotifyWebApi from 'spotify-web-api-js';

import {useDataLayerValue} from "./DataLayer";

const spotify = new SpotifyWebApi();




function App() {


 

  const [{ user,token },dispatch] = useDataLayerValue();
  //Run code based on given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if(_token){

      dispatch({

        type: "SET_TOKEN",
        token:_token,


      })

    spotify.setAccessToken(_token);

    spotify.getMe().then((user) => {

    
      dispatch({
        type: 'SET_USER',
        user:user,

      });

    });

    }

    console.log('I have a token', token);



  }, []);

  return (
    <div className="App">

    {
      token?(
        <Player />
      ):(

      <Login />
      )


    }
         
      

    </div>
  

  );
}

export default App;
