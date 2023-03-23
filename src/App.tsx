import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useGlobalContext from "./hooks/useGlobalContext";

// components
import Background from "./components/Background";
import UserForm from "./components/UserForm";
import Wheel from "./components/Wheel";
import Winner from "./components/Winner";

// assets
import spinning from "./assets/sound/spinner.mp3";
import success from "./assets/sound/sucess.mp3";

function App() {
  // global states
  const { wheel, winner, coupon } = useGlobalContext({});
  // spinning sound
  const spinningSound = useMemo(() => {
    return new Audio(spinning);
  }, []);
  // success sound
  const successSound = useMemo(() => {
    return new Audio(success);
  }, []);

  return (
    <div className="min-h-full h-full">
      <Background />
      {/* Animation Presence */}
      <AnimatePresence mode="wait">
        {/* UserForm */}
        {!wheel && !winner.length ? (
          <motion.div
            className="px-4 w-full h-full flex justify-center items-center"
            key="userForm"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
          >
            <UserForm />
          </motion.div>
        ) : null}
        {/* Wheel */}
        {wheel && !winner.length ? (
          <motion.div
            className="w-full h-full flex flex-col justify-center items-center gap-4 px-4"
            key="wheel"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ x: "-100%", opacity: 0, transition: { delay: 1 } }}
          >
            <Wheel spinningSound={spinningSound} successSound={successSound} />
          </motion.div>
        ) : null}
        {/* Winner */}
        {winner.length ? (
          <motion.div
            className="px-4 w-full h-full flex justify-center items-center"
            key="winner"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ scale: 0.5, opacity: 0 }}
          >
            <Winner message={winner} coupon={coupon} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default App;
