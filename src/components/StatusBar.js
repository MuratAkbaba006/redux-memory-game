import React from 'react'
import { useSelector } from 'react-redux'

const StatusBar = ({clickCount}) => {
  const point = useSelector((state)=>state.memory.point);
  return (
    <div className="status">
      <div className="status-pointarea">
        <label htmlFor="">Point: </label>
        <h2>{point}</h2>
      </div>
      <div className="status-click">
        <label htmlFor="">Move Count: </label>
        <h2>{clickCount}</h2>
      </div>
    </div>
  )
}

export default StatusBar
