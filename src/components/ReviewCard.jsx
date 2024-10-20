import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <img src={imgURL} alt="customer" className="rounded-full h-[120px] w-[120px] object-cover"/>
      <p className='info-text mt-6 max-w-sm text-center'>{feedback}</p>
      <div className='flex flex-row justify-center items-center gap-2.5'>
        <img src={star} alt="start" height={24} width={24}/>
        <p className='font-montserrat text-xl text-slate-gray'>({rating})</p>
      </div>
      <h3 className='font-bold font-palanquin text-3xl mt-2'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard
