import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Breakpoint } from 'react-socks';

// import '../Menu.scss'

const Burgers = () => {
  return (
    <Carousel emulateTouch showThumbs={false} showStatus={false} stopOnHover={false} infiniteLoop={true} autoPlay={true} interval={5000} dynamicHeight={false} showIndicators={false} transitionTime={400} useKeyboardArrows={true}>
      <div>
        <img src={require("../../assets/Menu/burgez-12.png")} alt="" />
      </div>
      <div>
        <img src={require("../../assets/Menu/burgez-11.png")} alt="" />
      </div>
      <div>
        <img src={require("../../assets/Menu/burgez-13.png")} alt="" />
      </div>
      <div>
        <img src={require("../../assets/Menu/burgez-14.png")} alt="" />
      </div>
      <div>
        <img src={require("../../assets/Menu/burgez-15.png")} alt="" />
      </div>
      <div>
        <img src={require("../../assets/Menu/burgez-16.png")} alt="" />
      </div>
      <div>
        <img src={require("../../assets/Menu/Triple_Cheese.png")} alt="" />
      </div>
    </Carousel>
  )
}

export default Burgers
