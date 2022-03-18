import Map from "../components/Map";
import NavBar from "../components/NavBar";

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
};
export default function Home() {
  return (
    <div className={style.wrapper}>
      <NavBar />
      <div className={style.main}>
        <Map />
      </div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
          {/* Lcoation selector */}
          {/* confirm ride */}
        </div>
      </div>
    </div>
  );
}
