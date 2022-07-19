import React from 'react'
import './Sliders.css'
import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import slideImgN1 from "../../images/slideImgN1.jpg"
import slideImgN2 from "../../images/slideImgN2.jpg"
import slideImgN3 from "../../images/slideImgN3.jpg"
const colors = [{image: <img key="example-key-1" src={slideImgN1}/>,
title: 'KATE',
year: '2021',
imdb: '6.2'},
{image: <img key="example-key-2"src={slideImgN2}/>,
title: 'EXTRACTION',
year: '2022',
imdb: '6.7'}, 
{image: <img key="example-key-3" src={slideImgN3}/>,
title: "SAS: Red Notice",
year: '2021',
imdb: '5.2'}];
const delay = 9500;
const Sliders = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((prag) => (
          <div className="slide">
            {prag.image}
            <h1 className='slide-title'>{prag.title}</h1>
            <h3 className='slide-year'>{prag.year}</h3>
            <h3 className='slide-imdb'><span>IMDB</span> {prag.imdb}</h3>
            <div className="text">
                  <div className="buttons">
                    <button className="play">
                      <PlayArrow />
                      <span>Play</span>
                    </button>
                    <button className="more">
                      <InfoOutlined />
                      <span>Info</span>
                    </button>
                  </div>
          
         </div>
          </div>
          
        ))}
        
        
      </div>
          
      
      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Sliders


