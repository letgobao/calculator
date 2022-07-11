import React from 'react'
import './Screen.css'
const Screen = ({data, input}) => {
  return (
    <div className='screen'>
      <span className='data'>{data}</span>
      <span>{input}</span>
    </div>
  )
}

export default Screen