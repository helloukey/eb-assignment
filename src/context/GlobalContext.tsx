import { createContext, useReducer, Dispatch } from "react";

type State = {
  wheel: boolean;
  winner: string;
  coupon: string;
};

type ACTIONTYPE =
  | { type: "SET_WHEEL"; payload: boolean }
  | { type: "SET_WINNER"; payload: string }
  | { type: "SET_COUPON"; payload: string };

type Context = {
  wheel: boolean;
  winner: string;
  coupon: string;
  dispatch: Dispatch<ACTIONTYPE>;
};

const authReducer = (state: State, action: ACTIONTYPE) => {
  switch (action.type) {
    case "SET_WHEEL": {
      return { ...state, wheel: action.payload };
    }
    case "SET_WINNER": {
      return { ...state, winner: action.payload };
    }
    case "SET_COUPON": {
      return { ...state, coupon: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const Global = createContext<Context | null>(null);
type Props = {
  children: React.ReactNode;
};

const GlobalProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, {
    wheel: false,
    winner: "",
    coupon: "",
  });

  return (
    <Global.Provider value={{ ...state, dispatch }}>{children}</Global.Provider>
  );
};
export default GlobalProvider;
