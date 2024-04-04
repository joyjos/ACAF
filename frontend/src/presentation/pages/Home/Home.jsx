import { useEffect, useState } from "react";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const offset = window.innerHeight / 2; // Use dynamic value based on viewport height

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > offset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <HeaderHome isSticky={isSticky} />
      <Slider />
      <Footer />
    </>
  );
}
