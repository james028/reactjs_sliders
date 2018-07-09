import React, { Component } from 'react'
import SlideOne from './sliders/slideOne';
import SlideTwo from './sliders/slideTwo';
import SlideThree from './sliders/slideThree';
import RightArrow from './sliders/RightArrow'
import LeftArrow from './sliders/LeftArrow'

export default class Slide extends Component {
    constructor() {
        super();

        this.state = {
            getSlide: 1
        };
    }

    prevSlide = () => {
        this.setState({
            getSlide: this.state.getSlide + 1
        })
    }

    nextSlide = () => {
        this.setState({
            getSlide: this.state.getSlide - 1
        })
    }
    
  render() {
    return (
        <div className="slider">
            {this.state.getSlide === 1 ? <SlideOne/> : null }
            {this.state.getSlide === 2 ? <SlideTwo/> : null }
            {this.state.getSlide === 3 ? <SlideThree/> : null }

            <LeftArrow left={this.prevSlide}/>
            <RightArrow right={this.nextSlide}/>
        </div>
    )
  }
}
