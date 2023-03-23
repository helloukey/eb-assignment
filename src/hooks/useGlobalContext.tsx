import { useContext } from "react";
import { Global } from "../context/GlobalContext";

type Props = {};
const useGlobalContext = (props: Props) => {
  const context = useContext(Global);
  if (!context) {
    throw new Error("Auth must be wrapped inside the AuthProvider.");
  }

  return context;
};
export default useGlobalContext;
