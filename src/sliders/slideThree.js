import React, { Component } from 'react';

const SlideThree = (props) => {

    let background = {
        backgroundImage: 'url(https://images.freeimages.com/images/large-previews/757/coming-home-1479467.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '600px'
      } 

  return <div style={background} className="slide"></div>
}

export default SlideThree;