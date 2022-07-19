import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = (props) => {
  const { data } = props;
  return (
    <div className="card-item">
      <Link to={`/movie/${data.imdbID}`}>
          <img src={data.Poster} alt={data.Title} />  
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>

      </Link>
    </div>
  );
};

export default MovieCard;