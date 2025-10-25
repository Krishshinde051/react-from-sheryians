import React from 'react'

const Card = (props) => {

  console.log(props.user)
  return (
    <div>
      <div className="card">
          <img src = {props.img} alt="" /> 
          <h1>{props.user}</h1>
          <p>{props.age}</p>
          <button>View Profile</button>
        </div>
    </div>
  )
}

export default Card
