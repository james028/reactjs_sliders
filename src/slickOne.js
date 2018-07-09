import React, { Component } from "react";
import Slider from "react-slick";
import { baseUrl } from "react-slick";

export default class AutoPlay extends Component {
    render() {
        var settings = {
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          pauseOnHover: true
        };
        return (
          <div>
            <h2>Pause On Hover</h2>
            <Slider {...settings}>
              <div>
              <img src="http://placekitten.com/g/400/200" />
              </div>
              <div>
              <img src="http://placekitten.com/g/400/200" />
              </div>
              <div>
              <img src="http://placekitten.com/g/400/200" />
              </div>
              <div>
              <img src="http://placekitten.com/g/400/200" />
              </div>
              <div>
              <img src="http://placekitten.com/g/400/200" />
              </div>
              <div>
              <img src="http://placekitten.com/g/400/200" />
              </div>
            </Slider>
          </div>
        );
      }
    }