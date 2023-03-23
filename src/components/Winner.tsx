import { useState, useEffect } from "react";
import wheel from "../assets/wheel.svg";
import useGlobalContext from "../hooks/useGlobalContext";
import Confetti from "react-confetti";
import useScreenWidth from "../hooks/useScreenWidth";

type Props = {
  message: string;
  coupon: string;
};
const Winner = ({ message, coupon }: Props) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [confetti, setConfetti] = useState<boolean>(true);
  const { dispatch } = useGlobalContext({});
  const { screenWidth, screenHeight } = useScreenWidth();

  const handleCopy = () => {
    navigator.clipboard.writeText(coupon);
    setCopied(true);
  };
  const handleClose = () => {
    navigator.clipboard.writeText(coupon);
    dispatch({ type: "SET_WINNER", payload: "" });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setConfetti(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {confetti ? (
        <Confetti
          width={screenWidth}
          height={screenHeight}
          tweenDuration={3000}
        />
      ) : null}
      {/* Wheel */}
      <div className="w-2/4 absolute -top-[10%] sm:-top-[20%] md:-left-[25%] md:top-2/4 md:-translate-y-2/4 2xl:static 2xl:translate-y-0 2xl:max-w-xl">
        <img src={wheel} alt="wheel" className="w-full h-auto" />
      </div>
      {/* coupon */}
      <div className="w-full max-w-lg md:max-w-xl lg:max-w-3xl flex flex-col gap-4 md:pl-36">
        <h1 className="text-center font-bold text-xl lg:text-2xl">
          Congrats! You Win:
        </h1>
        <h2 className="text-center font-bold text-4xl">{message}</h2>
        <div className="w-full flex flex-nowrap my-4">
          <span className="w-full p-5 font-bold text-white text-2xl xs:text-4xl bg-[rgba(20,20,20,0.2)] rounded-l-2xl">
            {coupon}
          </span>
          <button
            className="p-5 font-bold text-white text-xl xs:text-3xl bg-[#146531] hover:saturate-150 rounded-r-2xl"
            onClick={handleCopy}
          >
            {copied ? "COPIED!" : "COPY"}
          </button>
        </div>
        {/* Button */}
        <button
          type="submit"
          className="w-fit mx-auto bg-[#146531] hover:saturate-150 py-5 px-12 rounded-full text-white font-bold text-xl xs:text-2xl"
          onClick={handleClose}
        >
          Close Panel & Copy
        </button>
      </div>
    </>
  );
};
export default Winner;
