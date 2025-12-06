import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-75 overflow-hidden relative rounded-4xl shrink-0 '>
      <img  className='h-full w-full object-cover ' src={props.img} alt="" />
      <RightCardContent color={props.id} id={props.id} tag={props.tag} />
    </div>
  )
}

export default RightCard
