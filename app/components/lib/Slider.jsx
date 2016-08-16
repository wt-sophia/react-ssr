import React from 'react'
import Slider from 'react-slick'

export default React.createClass({
  render: function () {
    var settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        lazyLoad: true
    };
    return (
        <Slider {...settings}>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
        </Slider>
    );
  }
});