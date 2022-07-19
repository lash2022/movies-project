import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
import user from "../../images/user.png";
import "./Header.css";

const Header = () => {
  const [term,setTerm] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault();
    if(term === ''){
      return alert('never exist')
    }
    
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm('')
  }
  return (
    <div className="header">
      
        <div className="logo"><Link to="/">𝑀𝒪𝒱𝐼𝐸𝐹𝒴 </Link></div>
        <form onSubmit={submitHandler} className="search-bar">
          <input type="text" value={term} placeholder = "Search..."
           onChange={(e) => {
            setTerm(e.target.value)
            navigate('/search')
            }}/>
          <button><i class="fa fa-search" aria-hidden="true"></i></button>
        </form>
     
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;