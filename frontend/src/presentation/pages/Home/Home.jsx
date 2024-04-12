import HeaderHome from "../../components/HeaderHome/HeaderHome";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import InfoHome from "../../components/InfoHome/InfoHome";


export default function Home() {
  return (
    <div className="pagesDisplay">
      <HeaderHome />
      <Slider />
      <InfoHome />
     
      <Footer />
    </div>
  );
}  
      
   
