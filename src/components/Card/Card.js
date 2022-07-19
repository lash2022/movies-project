import React from 'react'
import { Link } from "react-router-dom";
import './Card.css'

const Card = () => {
    
  return (
    <div className="card-body">
      <div class="flip-card">
      <div class="flip-card-front">
        <div class="inner">
          <img src="https://i.imgur.com/C9DWUDi.png" class="icon" />
          <h3>avengers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            corrupti itaque dolore!
          </p>
        </div>
      </div>
      <div class="flip-card-back">
        <div class="inner">
          <img src="https://i.imgur.com/aJauAJV.png" class="icon" />
          <h3>iron man</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            voluptatum eius quam debitis, sit amet sunt neque ipsum?
          </p>
        </div>
      </div>
    </div>
    <div class="flip-card">
      <div class="flip-card-front">
        <div class="inner">
          <img src="https://i.imgur.com/C9DWUDi.png" class="icon" />
          <h3>avengers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            corrupti itaque dolore!
          </p>
        </div>
      </div>
      <div class="flip-card-back">
        <div class="inner">
          <img src="https://i.imgur.com/ep0HjjD.png" class="icon" />
          <h3>thor</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            voluptatum eius quam debitis, sit amet sunt neque ipsum?
          </p>
        </div>
      </div>
    </div>
    <div class="flip-card">
      <div class="flip-card-front">
        <div class="inner">
          <img src="https://i.imgur.com/C9DWUDi.png" class="icon" />
          <h3>avengers</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            corrupti itaque dolore!
          </p>
        </div>
      </div>
      <div class="flip-card-back">
        <div class="inner">
          <img src=" https://i.imgur.com/wROMxVv.png" class="icon" />
          <h3>spider-man</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            voluptatum eius quam debitis, sit amet sunt neque ipsum?
          </p>
        </div>
      </div>
    </div>
            
       
    </div>
    
  )
}

export default Card