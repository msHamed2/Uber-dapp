import React from "react";
import uberX from "../assets/rides/uberX.png";
import uberXL from "../assets/rides/uberXL.png";
import uberBlack from "../assets/rides/uberBlack.png";
import uberBlackSuv from "../assets/rides/uberBlackSuv.png";
import uberSelect from "../assets/rides/uberSelect.png";
import Image from "next/Image";
const style = {
  wrapper: `h-full flex flex-col`,
  title: `text-gray-500 text-center text-xs py-2 border-b`,
  carList: `flex flex-col flex-1 overflow-scroll`,
  car: `flex p-3 m-2 items-center border-2 border-white`,
  selectedCar: `border-2 border-black flex p-3 m-2 items-center`,
  carImage: `h-14`,
  carDetails: `ml-2 flex-1`,
  service: `font-medium`,
  time: `text-xs text-blue-500`,
  priceContainer: `flex items-center`,
  price: `mr-[-0.8rem]`,
}
const carList = [
  {
    name: "UberX",
    iconUrl: uberX,
    priceMultiplier: 1,
  },
  {
    name: "UberBlack",
    iconUrl: uberBlack,
    priceMultiplier: 1.5,
  },
  {
    name: "UberBlackSuv",
    iconUrl: uberBlackSuv,
    priceMultiplier: 2,
  },
  {
    name: "UberSelect",
    iconUrl: uberSelect,
    priceMultiplier: 2.5,
  },
  {
    name: "UberXL",
    iconUrl: uberXL,
    priceMultiplier: 3,
  },
];
const RideSelector = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}> Chose a ride mor swipe for more</div>
      <div className={style.carList}>
        {carList.map((car, index) => (
          <div className={style.car}>
            <Image
              src={car.iconUrl}
              className={style.carImage}
              height={50}
              width={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RideSelector;
