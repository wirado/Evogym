import { useEffect, useState } from "react"
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"
import Benefits from "./components/benefits/Benefits"
import { SelectedPage } from "./type/types"
import OurClasses from "./components/classes/OurClasses"
import ContactUs from "./components/ContactUs/ContactUs"
import Footer from "./components/ContactUs/Footer"

function App() {

const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)  

const [isTopOfPage,setIsTopOfPage] = useState<boolean>(false)

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home);
    }
    if (window.scrollY !== 0) setIsTopOfPage(false);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
},[])
 
  return (
    <div className=" app container mx-auto ">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default App
