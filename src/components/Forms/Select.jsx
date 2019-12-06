import React from 'react'

const Select = ({ children, onChange, value, style }) => {
  return (
    <select className={style} name="tipoOfferente" id="type" onChange={onChange} value={value}>
      {children}
    </select>
  )
}

export default Select
