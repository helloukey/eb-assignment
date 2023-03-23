import { useContext } from "react";
import { Global } from "../context/GlobalContext";

type Props = {};
const useGlobalContext = (props: Props) => {
  const context = useContext(Global);
  
  // Error if used outside context
  if (!context) {
    throw new Error("Global must be wrapped inside the GlobalProvider.");
  }

  return context;
};
export default useGlobalContext;
