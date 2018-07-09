import React, { Component } from 'react';

const SlideTwo = (props) => {

    let background = {
        backgroundImage: 'url(https://images.freeimages.com/images/large-previews/660/come-in-1249436.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '600px'
      } 

  return <div style={background} className="slide"></div>
}

export default SlideTwo;