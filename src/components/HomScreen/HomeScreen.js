import React from 'react'
import './HomeScreen.css'
import Nav from '../Navbar/Nav';
import Banner from '../Banner/Banner';
import requests from '../../Request';
import Row from '../Row/Row';

function HomeScreen(){
    return(
        <div className='homeScreen'>
            <Nav />      

            <Banner />      
            
            <Row title="NETFLIX ORIGINALS"
                fetchUrl={"https://api.themoviedb.org/3/search/movie?query=Original&api_key=f01cb3d1f71f48f9d81de9db0162f2ec"}
                isLargeRow
            />
            <Row title="Trending Now" fetchUrl={"https://api.themoviedb.org/3/search/movie?query=Top&api_key=f01cb3d1f71f48f9d81de9db0162f2ec"} />
            <Row title="Top Rated" fetchUrl={"https://api.themoviedb.org/3/search/movie?query=Rated&api_key=f01cb3d1f71f48f9d81de9db0162f2ec"} />
            <Row title="Action Movies" fetchUrl={"https://api.themoviedb.org/3/search/movie?query=Action&api_key=f01cb3d1f71f48f9d81de9db0162f2ec"} />
            <Row title="Comedy Movies" fetchUrl={"https://api.themoviedb.org/3/search/movie?query=Comedy&api_key=f01cb3d1f71f48f9d81de9db0162f2ec"} />
            <Row title="Horror Movies" fetchUrl={"https://api.themoviedb.org/3/search/movie?query=Horror&api_key=f01cb3d1f71f48f9d81de9db0162f2ec"} />
            <Row title="Romance Movies" fetchUrl={"https://api.themoviedb.org/3/search/movie?query=Romance&api_key=f01cb3d1f71f48f9d81de9db0162f2ec"} />
            <Row title="Documentaries" fetchUrl={"https://api.themoviedb.org/3/search/movie?query=Documentaries&api_key=f01cb3d1f71f48f9d81de9db0162f2ec"} />
        </div>
    )
}

export default HomeScreen;