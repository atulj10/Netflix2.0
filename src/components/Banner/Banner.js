import "./Banner.css"
import React, { useEffect, useState } from "react"
import netflix_banner from "../../assets/netflix-banner.jpg"
import axios from '../../axios'
import requests from '../../Request'

function Banner(){

    const [movie,setMovie]=useState([])

    useEffect(()=>{
       async function fetchData(){
        const request=await axios.get("https://api.themoviedb.org/3/search/movie?query=Netflix&api_key=f01cb3d1f71f48f9d81de9db0162f2ec")
        setMovie(
          request.data.results[
            Math.floor(Math.random()*request.data.results.length-1)
          ]
        )
        return request
       }

       fetchData()
    },[])

    console.log(movie)

    function truncate(string,n){
        return string?.length >n ? string.substr(0,n-1)+'...' : string
    }

    return(
        <header  className="Banner"  
        style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center",
        }}>
          <div className="banner-contents">
              <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
              <div className="banner_buttons">
                <button className="banner-button">Play</button>
                <button className="banner-button">My List</button>
              </div>
              <div className="banner_description">
                {truncate(movie?.overview,150)}
              </div>
           </div>
           <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner