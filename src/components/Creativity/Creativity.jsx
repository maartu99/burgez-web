import React from 'react'
import Headroom from 'react-headroom'
import LogoMain from '../Logo/LogoMain'

import './Creativity.scss'

const Creativity = () => {
  return (
    <div>
      <Headroom>
        <LogoMain />
      </Headroom>
      <div className='creativity-container'>
        <div className='creativity-text'>
          <span className='creativity-p'>La creatività, i social, la comunicazione e il marketing sono curati dagli 
          <br/> <span className='creativity-bold'>UPPER BEAST SIDE.</span></span>
        </div>
        <div className='creativity-ink'><a href="http://www.upperbeastside.com">upperbeastside.com</a></div>
      </div>
    </div>
  )
}

export default Creativity
