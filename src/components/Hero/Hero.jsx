import React from 'react';
import "./Hero.scss";
import Fade from 'react-reveal/Fade';

function Hero() {
  return (
    <div className='hero'>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://picsum.photos/id/1/1579/632" className="hero__img d-block w-100" alt="hero" />
            <div className="carousel-caption d-none d-md-block">
              <Fade right>
                <span className='slider-three-entry'>
                  daily promotions
                </span>
                <h2 className='slider-three-title'>
                  Fresh Lemon <br />
                  discount up to <span>40 % off</span>
                </h2>
                <div className='slider-box w-100 d-flex'>
                  <button className='slider-one-btn slider-three-btn'>
                    shop now
                  </button>
                </div>
              </Fade>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/id/2/1579/632" className="hero__img d-block w-100" alt="hero" />
            <div className="carousel-caption d-none d-md-block">
              <Fade right>
                <span className='slider-one-entry'>
                  Shop our freshest
                </span>
                <h2 className='slider-one-title'>
                  Fresh Hand-Picked <br />
                  Vegetables <span>Everyday!</span>
                </h2>
                <div className='w-100 d-flex'>
                  <button className='slider-one-btn'>
                    shop now
                  </button>
                </div>
              </Fade>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://picsum.photos/id/3/1579/632" className="hero__img d-block w-100" alt="hero" />
            <div className="carousel-caption d-none d-md-block">
              <Fade top>
                <span className='slider-two-entry'>
                  ellesi store
                </span>
                <h2 className='slider-two-title'>
                  Fresh vegetables <br />
                  Sale up to 30% Off
                </h2>
                <div className='slider-box w-100 d-flex'>
                  <button className='slider-two-btn'>
                    shop now
                  </button>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <div>
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </div>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <div>
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Hero
