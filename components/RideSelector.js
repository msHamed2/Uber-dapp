import React from "react";
import uberX from "../assets/rides/uberX.png";
import uberXL from "../assets/rides/uberXL.png";
import uberBlack from "../assets/rides/uberBlack.png";
import uberBlackSuv from "../assets/rides/uberBlackSuv.png";
import uberSelect from "../assets/rides/uberSelect.png";
import Image from "next/Image";
const style = {};
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
    priceMultiplier: 2,
  },
  {
    name: "UberXL",
    iconUrl: uberXL,
    priceMultiplier: 2,
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
