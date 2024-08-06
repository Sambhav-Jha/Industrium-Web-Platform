import Navbar from "./Navbar/Navbar"
import About from "./AboutUs/About"
import Portals from "./Portals/Portals"
import WhyIndustrium from "./WhyIndustrium/WhyIndustrium"
import IndustrySegments from "./IndustrySegments/IndustrySegments"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
        <div className="container">
          <Routes>
            <Route path="/wi" element={<WhyIndustrium/>}/>
            <Route path="/is" element={<IndustrySegments/>}/>
            <Route path="/portals" element={<Portals/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </div>
    </>

  );
}

export default App
