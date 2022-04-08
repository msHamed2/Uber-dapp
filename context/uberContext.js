import { createContext, useState, useEffect } from "react";
export const UberContext = createContext();

export const UberProvider = ({ Children }) => {
  const createLocationCoordinatePromis = (locationName, locationType) => {
    return new Promise(async (resolve, reject) => {
        try{
      const response = await fetch("/api/db/getLocationCoordinates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ location: locationName }),
      });
      const data = await response.json();
      if ((data.message = "success")) {
        switch (locationType) {
          case "pickup":
            setPickUpCoordinates(data.data);
            break;
          case "dropoff":
            setDropOffCoordinates(data.data);
            break;
        }
        resolve();
      } else {
        reject();
      }
    } catch(error){
        console.log(error)
        reject()
    }
    });
  };
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickUpCoordinates, setPickUpCoordinates] = useState();
  const [dropOffCoordinates, setDropOffCoordinates] = useState();

  useEffect(() => {
    if (pickUp && dropOff) {
      (async () => {
        await Promise.all([
            createLocationCoordinatePromis(pickUp,'pickup'),
            createLocationCoordinatePromis(dropOff,'dropoff')

        ]);
      })();
    } else return
  }, [dropOff, pickUp]);

  return <UberContext.Provider value={0}>{Children}</UberContext.Provider>;
};
