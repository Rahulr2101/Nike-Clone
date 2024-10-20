import { arrowRight } from "../assets/icons"
import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex flex-1  justify-between max-lg:flex-col gap-10 items-center">
     <h3 className="text-4xl font-montserrat font-semibold sm:max-w-lg">Sign Up for <span className="text-coral-red">Updates</span> & Newletter</h3>

     <div className="flex lg:max-w-[40%] max-sm:flex-col  items-center border rounded-full p-1.5 w-full gap-5">
      <input type="text" placeholder="subscribe@nike.com" className="input"/>
      <div className="flex max-sm:justify-end items-center max-sm:w-full">
        <Button label={"Sign Up"} iconUrl={arrowRight}/>
      </div>
     </div>
    </section>
  )
}

export default Subscribe
