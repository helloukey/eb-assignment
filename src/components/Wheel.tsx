import { useState } from "react";

import spinWheel from "../assets/spin-wheel.svg";
import indicator from "../assets/indicator.svg";
import useGlobalContext from "../hooks/useGlobalContext";

type Props = {
  spinningSound: HTMLAudioElement;
  successSound: HTMLAudioElement;
};

const Wheel = ({ spinningSound, successSound }: Props) => {
  const [spinDeg, setSpinDeg] = useState<number>(0);
  const [spinning, setSpinning] = useState<boolean>(false);
  const [randomString, setRandomString] = useState<string>("");
  const { dispatch } = useGlobalContext({});

  function generateRandomString() {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < 8; i++) {
      if (i % 2 === 0) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      } else {
        result += Math.floor(Math.random() * 10);
      }
    }
    setRandomString(result);
  }

  const handleSpin = () => {
    setSpinning(true);
    spinningSound.play();
    const randomDeg = Math.floor(5000 + Math.random() * 5000);
    generateRandomString();
    setSpinDeg(randomDeg);
  };

  const handleTransitionEnd = () => {
    spinningSound.pause();
    successSound.play();
    setSpinning(false);

    const zones: { [key: number]: string } = {
      1: "30% SiteWide Off",
      2: "Hot Chocolate Free with Tea",
      3: "Free 50g Tea on Purchase of Rs.500",
      4: "Buy 2 Effervescent Tablets & Get 1 Free",
      5: "Free Coffee Mug on Purchase of 1000+",
      6: "Buy 1 Get 1 Free",
    };

    const size = 60;
    const actualDeg = spinDeg % 360;
    const winner = Math.ceil((actualDeg + 30) / size);
    if (winner === 7) {
      const result = zones[1];
      dispatch({ type: "SET_WINNER", payload: result });
      dispatch({ type: "SET_WHEEL", payload: false });
      dispatch({ type: "SET_COUPON", payload: randomString });
    } else {
      const result = zones[winner];
      dispatch({ type: "SET_WINNER", payload: result });
      dispatch({ type: "SET_WHEEL", payload: false });
      dispatch({ type: "SET_COUPON", payload: randomString });
    }
  };

  return (
    <>
      <div className="relative w-full h-auto max-w-sm lg:max-w-lg">
        <img
          src={spinWheel}
          alt="wheel"
          className={`transition-all duration-[11s] ease-in-out`}
          style={spinDeg ? { rotate: `${spinDeg}deg` } : {}}
          onTransitionEnd={handleTransitionEnd}
        />
        <img
          src={indicator}
          alt="wheel"
          className="w-16 h-16 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
        />
      </div>
      {/* Button */}
      <button
        className={`bg-button hover:saturate-150 py-5 px-12 lg:px-16 rounded-full text-white font-bold text-2xl ${
          spinning ? "pointer-events-none" : ""
        }`}
        onClick={handleSpin}
        disabled={spinning}
      >
        SPIN
      </button>
    </>
  );
};
export default Wheel;
