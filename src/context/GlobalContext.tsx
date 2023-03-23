import { createContext, useReducer, Dispatch } from "react";

// State type
type State = {
  wheel: boolean;
  winner: string;
  coupon: string;
};

// Action type
type ACTIONTYPE =
  | { type: "SET_WHEEL"; payload: boolean }
  | { type: "SET_WINNER"; payload: string }
  | { type: "SET_COUPON"; payload: string };

// Context type
type Context = {
  wheel: boolean;
  winner: string;
  coupon: string;
  dispatch: Dispatch<ACTIONTYPE>;
};

// Reducer function
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

// Context creation
export const Global = createContext<Context | null>(null);

// Global Provider type
type Props = {
  children: React.ReactNode;
};

// GlobalProvider
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
