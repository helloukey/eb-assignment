import { useState } from "react";

// Input type
type Props = {
  label: string;
  name: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  label,
  name,
  type = "text",
  onChange,
  placeholder,
  value,
}: Props) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div className="w-full flex flex-col relative pt-8 pb-2">
      <label
        htmlFor={label}
        className={`transition-all absolute ${
          isFocus || value ? "top-2 text-sm text-gray-500" : "top-5"
        }`}
      >
        {label}
      </label>
      <input
        id={label}
        name={name}
        type={type}
        className="peer w-full border-none placeholder-transparent focus:outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </div>
  );
};

export default Input;
