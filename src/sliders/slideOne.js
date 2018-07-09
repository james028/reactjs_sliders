import React, { Component } from 'react';

const SlideOne = (props) => {

    let background = {
        backgroundImage: 'url(https://images.freeimages.com/images/large-previews/4a3/coming-home-1371162.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '600px'
      } 

  return <div style={background} className="slide"></div>
}

export default SlideOne;