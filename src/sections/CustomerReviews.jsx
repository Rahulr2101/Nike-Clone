import ReviewCard from "../componenets/ReviewCard";
import {reviews} from "../constants/index"
const CustomerReviews = () =>{
    return(
       <section className="max-container">
        <h3 className="font-palanquin font-bold text-center text-4xl">
            What out <span className="text-coral-red">Customers</span> Say ?
        </h3>
        <p className="font-montserrat info-text lg:max-w-lg text-center m-auto mt-4">Hear genuine stories from our satisfield customers about their exceptional experiences with us</p>
        <div className="flex flex-1 justify-evenly items-center max-lg:flex-col mt-24 gap-5">
            {reviews.map((items)=>(<ReviewCard key={items.customerName} imgURL={items.imgURL} customerName={items.customerName} rating= {items.rating} feedback={items.feedback}/>))}
            
        </div>
       </section>
    )
}

export default CustomerReviews;
