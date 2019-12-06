import React, { useState } from 'react'

import Modal from 'react-responsive-modal'

const LocationComponent = ({ children, iframe, mapPinWidth, title, style, mobile }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="location-container fl w-100" style={style}>
      <ul className={`${mobile ? 'ulmobile': null} fl w-80`}>
        <li id="title">{title}</li>
        {children}
      </ul>
      <div className="fl w-5 map-container">
        <a><img onClick={() => setOpen(true)} className="" id="map" src={require("../../assets/map.png")} alt="" style={{ width: mapPinWidth }} /></a>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <iframe src={iframe} width={`${mobile ? 350 : 600}`} height="450" frameBorder="0" style={{ border: 0 }} allowFullscreen></iframe>
      </Modal>
    </div>
  )
}

export default LocationComponent
