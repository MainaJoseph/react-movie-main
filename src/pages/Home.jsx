import React from 'react';
import { Link } from 'react-router-dom';
import videoBg from "../components/video/videoBg.mp4";
import buzzBg from "../components/video/buzzBg.mp4";


import { OutlineButton } from '../components/button/Button';
import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';

import { category, movieType, tvType } from '../api/tmdbApi';


const Home = () => {
    return (
        <>
      
            <HeroSlide/>
            
            <div className="container">
<video
autoPlay
loop
muted
style={{
    position: "absolute",
    width: "100%",
   
  
}}
>

    <source src={videoBg} type="video/mp4" />
</video>


<video
autoPlay
loop
muted
style={{
    position: "absolute",
    width: "100%",
    top: "100%",
   
  
}}
>

    <source src={buzzBg} type="video/mp4" />
</video>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        
                        <h2>Trending Movies</h2>
                        <Link to="/movie">
                            
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>

                <div className="section mb-3" >
                    <div className="section__header mb-2" >
                        <h2>Trending movie</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">Trending movies</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top rated movie</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">Top rated movies</OutlineButton>
                            
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular}/>
                </div>

                <div className="section mb-3">

                    
                    <div className="section__header mb-2">
                        <h2>Top Rated TV</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">Top rated Tv</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated}/>
                </div>
            </div>
         
        </>
    );
}

export default Home;
