import React from 'react'

const MyFarm = ({farm}) => {
  return (
    <div>
      <h4>{farm.name}</h4>
      <p>{farm.description}</p>
    </div>
  )
}

export default MyFarm