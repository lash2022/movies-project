import React, { useEffect } from 'react'
import SearchListing from '../SearchListing/SearchListing'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'

const Search = () => {
    const dispatch = useDispatch()
    const movieText = "pianist";
    const seriesText = "game"
    useEffect(() => {
      dispatch(fetchAsyncMovies(movieText))
      dispatch(fetchAsyncShows(seriesText))
    }, [dispatch])
    return (
      <div> 
        <div className="banner-img"></div>
        <SearchListing />
      </div>
    )
}

export default Search