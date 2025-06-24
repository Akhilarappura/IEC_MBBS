import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/view/navigation";
import { Header } from "./components/view/header";
import { Features } from "./components/view/features";
import { About } from "./components/view/about";
import { Services } from "./components/view/services";
import { Country } from "./components/view/country";
import { Contact } from "./components/view/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Footer from "./components/view/footer";
import StudyDestination from "./components/view/studyDestinations";
import ImageCarousel from "./components/view/imageCarousal";
import UniversityDetail from "./components/view/universityDetail";
import { ContactUs } from "./components/view/contactUs";
import Gallery from "./components/view/gallery";
import { About_Home } from "./components/view/about_Home";
import { MissionValues } from "./components/view/missionValues";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <>
      <Navigation />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header data={landingPageData.Header} />
              <Features data={landingPageData.Features} />
              <About data={landingPageData.About} />
              <Services data={landingPageData.Services} />
              <Country data={landingPageData.Country} />
              <ImageCarousel />
              <Contact data={landingPageData.Contact} />

             
      
            </>
          }
        />
        <Route
          path="/study-destination/:country"
          element={<StudyDestination />}
        />
        <Route
          path="/university/:universityId"
          element={<UniversityDetail />}
        />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route
          path="/university/:universityId"
          element={<UniversityDetail />}
        />
          <Route
          path="/gallery"
          element={<Gallery />}
        />
              <Route
          path="/about_home"
          element={<About_Home />}
        />
        <Route
          path="/mission"
          element={<MissionValues />}
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
