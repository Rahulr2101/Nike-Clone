import React from 'react'






const ShoeCard = ({imgURL,changeBigShoeImg,bigShoeImg}) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImg(imgURL.bigShoe);
    }
  };
  return (
    <div className={`border-2  rounded-xl ${bigShoeImg === imgURL.bigShoe ?'border-coral-red' :'border-transparent'} cursor-pointer max-sm:flex-1`}
    onClick={handleClick}
    >
      <div className='flex justify-center border-2 bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl mx-sm:p-4'>
        <img src={imgURL.thumbnail}/>
      </div>
    </div>
  )
}

export default ShoeCard;
