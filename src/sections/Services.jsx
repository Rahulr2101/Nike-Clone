import ServicesCard from "../componenets/ServicesCard"
import {services} from "../constants/index"

const Services = () => {
  return (
    <section className=" flex max-container justify-center  gap-9">
        {services.map((items)=>(<ServicesCard key={Services.label} {...items}/>))}

    </section>
  )
}

export default Services
