import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import './index.css';

const CarouselSlider = (props) => {
  const sliderRef = useRef(null);
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 10px',
        }}>
        <h4 className='carousel-card-title'>{props.title}</h4>
        <div style={{ display: 'flex' }}>
          <h4 className='carousel-card-view-all'>View All</h4>
          <button
            className='arrow-btn'
            onClick={() => sliderRef.current.slickPrev()}>
            <i className='fa fa-angle-left' aria-hidden='true'></i>
          </button>
          <button
            className='arrow-btn'
            onClick={() => sliderRef.current.slickNext()}>
            <i className='fa fa-angle-right' aria-hidden='true'></i>
          </button>
        </div>
      </div>
      <div style={{ margin: 30 }}>
        <Slider
          dots
          dotsclassName='slick-dots line-indicator'
          ref={sliderRef}
          slidesToShow={props.slidesToShow ? props.slidesToShow : 4}
          slidesToScroll={4}
          customPaging={(i) => (
            <div
              style={{
                position: 'absolute',
                width: '90%',
                top: '-10px',
                opacity: 0,
                margin: '0px 10px',
              }}>
              {i}
            </div>
          )}>
          {props.children}
        </Slider>
      </div>
    </div>
  );
};
export default CarouselSlider;
