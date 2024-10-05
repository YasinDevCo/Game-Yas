import React, { useEffect, useState } from "react";
import "./Slider.css";
import mess from "./../assets/messsage.svg";
import left from "./../assets/left.svg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useQuery } from "@apollo/client";
import QUERY_GET_GAMES_SLIDE from "../graphql/game";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { data, error, loading } = useQuery(QUERY_GET_GAMES_SLIDE);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
  };
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 4) % 4);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  if (!loading && data) {
    const latestSlides = data.gameTables.slice(-4);

    return (
      <div className="slider">
        <div className="sliderImage">
          <img src={latestSlides[currentSlide].image.url} alt="" />
        </div>

        <div className="sliderContent">
          <span className="title">{latestSlides[currentSlide]?.title}</span>
          <div>
            <h4>{latestSlides[currentSlide]?.title}</h4>
            <p className='none'>{latestSlides[currentSlide]?.description}</p>
          </div>
          <p className="comment">
            <span>
              <img src={mess} alt="" />
            </span>
            {latestSlides[currentSlide]?.comments} نظر
          </p>
          <button className="btn">
            <img src={left} alt="" />
          </button>
        </div>

        <div className="sliderShow">
          {latestSlides.map((slide, index) => (
            <div key={index}>
              <img
                className={`item ${index === currentSlide ? "active" : ""}`}
                src={slide.image.url}
                alt=""
              />
            </div>
          ))}

          <div className="arrow">
            <button onClick={prevSlide}>
              <FaAngleRight size={15} />
            </button>
            <button onClick={nextSlide}>
              <FaAngleLeft size={15} />
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <h3>loading</h3>;
  }
}

export default Slider;
