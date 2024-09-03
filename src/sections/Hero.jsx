import { arrowRight } from "../assets/icons";
import { bigShoe1,bigShoe2,bigShoe3 } from "../assets/images";
import Button from "../componenets/Button";
import { shoes, statistics } from "../constants";
import ShoeCard from "../componenets/ShoeCard";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../componenets/Loader";
import Shoe3d from "../models/Shoes3d";
import Shoe3d1 from "../models/Shoes3d2";
import Shoe3d2 from "../models/Shoes3d1";
const Hero = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  const adjustBigShoeImg = () => {
    let screenScale, ScreenPostion;
    let Shoerotation = [0, 4, 0.5];
    if (window.innerWidth < 768) {
      screenScale = [10, 10, 10];
      ScreenPostion = [6, 0, -43];
    } else {
      screenScale = [10, 10, 10];
      ScreenPostion = [2, -6, -14];
    }
    return [screenScale, ScreenPostion, Shoerotation];
  };
  const [shoeScale, shoePosition, shoerotation] = adjustBigShoeImg();
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center  min-h-screen  gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray leading-8 mt-6 text-lg mb-14 sm:max-w-sm">
          Discorver Stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 text-slate-gray font-montserrat">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <Canvas
          className={`w-full h-screen ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            {bigShoeImg === bigShoe1 && (
              <Shoe3d
                position={shoePosition}
                scale={shoeScale}
                rotation={shoerotation}
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                startAnimation={startAnimation}
                setStartAnimation={setStartAnimation}
              />
            )}
            {bigShoeImg === bigShoe2 && (
              <Shoe3d1
                position={[0, -75, -50]}
                scale={[1.7, 1.7, 1.7]}
                rotation={[0, 5, 0]}
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                startAnimation={startAnimation}
                setStartAnimation={setStartAnimation}
              />
            )}
            {bigShoeImg === bigShoe3 && (
              <mesh>
                <ambientLight intensity={10} />
              <Shoe3d2
                position={[-5, -75, -50]}
                scale={[15, 15, 15]}
                rotation={[0, 0, 0]}
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                startAnimation={startAnimation}
                setStartAnimation={setStartAnimation}
              />
              </mesh>
              
            )}
          </Suspense>
        </Canvas>

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImg={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
