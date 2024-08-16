const Button = ({label,iconUrl,background,border,text,textcolor}) => {
  return (
    <button className={`flex justify-center  items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none rounded-full text-white ${background ? `${background} ${border}`:'bg-coral-red border-x-coral-red ' }` } >
      {label}
      {text?<p className={`${textcolor}`}>{text}</p>:<img src={iconUrl} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5 "/>}
    </button>
  )
}

export default Button
