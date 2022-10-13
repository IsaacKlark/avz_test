import { AnimatedPreloader } from "./styles";
import { ReactComponent as PreloaderSVG } from "../../images/preloader.svg";

const Preloader = ({ display }) => {
  if (!display) return null;

  return (
    <AnimatedPreloader>
      <PreloaderSVG />
    </AnimatedPreloader>
  );
};

export default Preloader;
