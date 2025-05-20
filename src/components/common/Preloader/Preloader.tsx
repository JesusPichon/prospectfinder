import { useEffect, useState } from "react";
import Logo from "../../../assets/xprs";

interface PreloaderProps {
  loading: boolean;
}

const Preloader = ({ loading }: PreloaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    if (loading) {
      // Cuando carga, mostramos el preloader y reseteamos el estado de ocultar
      setIsVisible(true);
      setIsHiding(false);
    } else {
      // Cuando termina carga, inicia fade out
      setIsHiding(true);
      const timeout = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  if (!isVisible) return null;

  return (
    <div
      className={`absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-white z-50 transition-opacity duration-500 ${
        isHiding ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-36 h-auto animate-bounce">
        <Logo />
      </div>
    </div>
  );
};

export default Preloader;
