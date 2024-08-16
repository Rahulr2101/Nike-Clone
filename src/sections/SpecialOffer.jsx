import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../componenets/Button";
const SpecialOffer = () => {
  return (
    <section className="max-container flex flex-1 gap-10 items-center flex-wrap">
      <div>
        <img src={offer} alt="offers" img={773} height={687} />
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="text-4xl font-semibold font-palanquinN lg:max-w-lg mt-4 mb-4">
          <span className="text-coral-red">Special</span> Offer
        </h3>
        <p className="font-montserrat info-text text-slate-gray lg:max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible saving we
          offer unparallel value sets us apart
        </p>
        <p className="font-montserrat info-text text-slate-gray lg:max-w-lg mt-2">Navigate a realm of possibilities designed to fullfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="flex flex-1 gap-4 mt-11 flex-wrap">
          <Button label="Shop now" iconUrl={arrowRight}>
            {" "}
          </Button>
          <Button
            background="bg-none"
            border="border-2 border-black
      "
            text="Learn more"
            textcolor={"text-black"}
          >
            {" "}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
