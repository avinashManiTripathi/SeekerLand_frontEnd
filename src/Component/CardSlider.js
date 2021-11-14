import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './CardSlider.css';

const CardSlider = ({ data }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      //   autoPlay={props.deviceType !== 'mobile' ? true : false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition='all .5'
      transitionDuration={500}
      containerclassName='carousel-container'
      removeArrowOnDeviceType={['tablet', 'mobile']}
      //   deviceType={props.deviceType}
      dotListclassName='custom-dot-list-style'
      itemclassName='carousel-item-padding-40-px'>
      {data &&
        data.map((data) => {
          return (
            <div className='card-slider'>
              <h2>{data.title} </h2>
              <h3>SpeckyFox Technologies</h3>
              <p>3 - 4 Years</p>
              <p>Java Hibernate SpringDataJpa </p>
            </div>
          );
        })}
    </Carousel>
  );
};

export default CardSlider;
