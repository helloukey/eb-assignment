import useScreenWidth from "../hooks/useScreenWidth";

// assets
import mobileTop from "../assets/decor/mobileTop.svg";
import tabletTop from "../assets/decor/tabletTop.svg";
import desktopTop from "../assets/decor/desktopTop.svg";
import mobileBottom from "../assets/decor/mobileBottom.svg";
import tabletBottom from "../assets/decor/tabletBottom.svg";
import desktopBottom from "../assets/decor/desktopBottom.svg";

type Props = {};
const Background = (props: Props) => {
  const { screenWidth } = useScreenWidth();
  return (
    <div className="h-full w-full bg-eb fixed z-[-1]">
      {/* Top Decor */}
      {/* Desktop */}
      {screenWidth > 1024 ? (
        <img
          src={desktopTop}
          alt="decor-bg"
          className="w-full absolute top-0 left-0 right-0"
        />
      ) : null}
      {/* Tablet */}
      {screenWidth > 750 && screenWidth < 1024 ? (
        <img
          src={tabletTop}
          alt="decor-bg"
          className="w-full absolute top-0 left-0 right-0"
        />
      ) : null}
      {/* Mobile */}
      {screenWidth < 750 ? (
        <img
          src={mobileTop}
          alt="decor-bg"
          className="w-full absolute top-0 left-0 right-0"
        />
      ) : null}

      {/* Bottom Decor */}
      {/* Desktop */}
      {screenWidth > 1024 ? (
        <img
          src={desktopBottom}
          alt="decor-bg"
          className="w-full absolute bottom-0 left-0 right-0"
        />
      ) : null}
      {/* Tablet */}
      {screenWidth > 750 && screenWidth < 1024 ? (
        <img
          src={tabletBottom}
          alt="decor-bg"
          className="w-full absolute bottom-0 left-0 right-0"
        />
      ) : null}
      {/* Mobile */}
      {screenWidth < 750 ? (
        <img
          src={mobileBottom}
          alt="decor-bg"
          className="w-full absolute bottom-0 left-0 right-0"
        />
      ) : null}
    </div>
  );
};
export default Background;
