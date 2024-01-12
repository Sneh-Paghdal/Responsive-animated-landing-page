import { useEffect, useState } from "react"
import Navbar from "./components/navbar"
import { SelectedPage } from "@/shared/types";
import Home from "./components/Home";
import Benifits from "./components/Benifits";
import OurClasses from "./components/Ourclasses";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {

  const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll)
  },[]);

  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage = {selectedPage}
        setSelectedPage = {setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage = {setSelectedPage}/>
      <Benifits setSelectedPage = {setSelectedPage}/>
      <OurClasses setSelectedPage = {setSelectedPage}/>
      <ContactUs setSelectedPage = {setSelectedPage}/>
      <Footer/>
    </div>
  )
}

export default App
