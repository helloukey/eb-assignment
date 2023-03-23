import { useState } from "react";
import useGlobalContext from "../hooks/useGlobalContext";
import Input from "./Input";

// assets
import email from "../assets/icons/email.svg";
import phone from "../assets/icons/phone.svg";
import cancel from "../assets/cancel.svg";
import wheel from "../assets/wheel.png";

type Props = {};
const UserForm = (props: Props) => {
  const [emailText, setEmailText] = useState<string>("");
  const [phoneText, setPhoneText] = useState<string>("");
  const [agreement, setAgreement] = useState<boolean>(false);
  const { dispatch } = useGlobalContext({});

  // regex
  const phonePattern = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  const emailPattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Alert if error or dispatch action
    if (!emailText || !phoneText) {
      alert("Please fill the fields.");
    } else if (!agreement) {
      alert("Please check the agreement.");
    } else if (!phonePattern.test(phoneText)) {
      alert("Your phone number is invalid.");
    } else if (!emailPattern.test(emailText)) {
      alert("Your email is invalid.");
    } else {
      dispatch({ type: "SET_WHEEL", payload: true });
    }
  };

  return (
    <>
      {/* Wheel */}
      <div className="w-2/4 absolute -top-[10%] sm:-top-[20%] md:-left-[25%] md:top-2/4 md:-translate-y-2/4 2xl:static 2xl:translate-y-0 2xl:max-w-xl">
        <img src={wheel} alt="wheel" className="w-full h-auto" />
      </div>
      {/* form */}
      <form
        className="scale-90 xs:scale-100 w-full max-w-lg md:max-w-xl lg:max-w-3xl flex flex-col gap-4 md:pl-36"
        onSubmit={handleSubmit}
      >
        <h2 className="w-full font-bold text-3xl md:text-4xl lg:text-6xl mb-4">
          This is how EngageBud looks like in action!
        </h2>
        {/* Email */}
        <div className="bg-white flex items-center gap-2 border-b-2 border-[#186532]">
          <div className="py-2 px-3">
            <img src={email} alt="email" className="w-10 h-10" />
          </div>
          <Input
            type="email"
            label="Email"
            name="email"
            placeholder="Email"
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
          />
        </div>
        {/* Phone */}
        <div className="bg-white flex items-center gap-2 border-b-2 border-[#186532]">
          <div className="py-2 px-3">
            <img src={phone} alt="phone" className="w-10 h-10" />
          </div>
          <Input
            type="text"
            label="Phone number"
            name="phone"
            placeholder="Phone number"
            value={phoneText}
            onChange={(e) => setPhoneText(e.target.value)}
          />
        </div>
        {/* Terms */}
        <div className="border-2 border-black rounded-xl flex items-center px-2 py-4 gap-4">
          <div className="w-10 h-10">
            <input
              type="checkbox"
              className="w-10 h-10 accent-black"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAgreement(e.target.checked)
              }
            />
          </div>
          <p className="font-normal text-sm md:text-base">
            I agree to receiving recurring automated messages at the number I
            have provided. Consent is not a condition to purchase.
          </p>
        </div>
        {/* Button */}
        <button
          type="submit"
          className="bg-button hover:saturate-150 p-5 rounded-full text-white font-bold text-2xl"
        >
          Try your luck
        </button>
        {/* Description */}
        <div className="flex flex-wrap justify-center items-center text-center italic gap-1 lg:gap-2">
          <p>*You can spin the wheel only once!</p>
          <p>*If you win, you can claim your coupon for 10 minutes only!</p>
        </div>
        {/* Skip */}
        <div className="flex justify-center items-center gap-4">
          <p className="text-xl font-bold">No, I don’t feel lucky</p>
          <img src={cancel} alt="cancel" className="w-6 h-6 cursor-pointer" />
        </div>
      </form>
    </>
  );
};
export default UserForm;
