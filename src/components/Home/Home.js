import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
import Slider from 'react-slick'
import Sliders from '../Sliders/Sliders'


const Home = () => {
  const dispatch = useDispatch()
  const movieText = "dark";
  const seriesText = "dark"
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(seriesText))
  }, [dispatch])
  return (
    <div> 
      <div className="banner-img"></div>
      <Sliders />
      <MovieListing />

    </div>
  )
}

export default Home