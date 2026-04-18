/* 
  페이지 전체 구조

  1. Header
  2. Hero
  3. 입지환경
  4. 단지안내
  5. 평면안내
  6. 방문예약
  7. Footer
  8. 우측 하단 방문예약 버튼
*/

import "./App.css";
import EventPopup from "./components/EventPopup";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import ImageSection from "./components/ImageSection";
import FloorplanSection from "./components/FloorplanSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
// import FloatingCallButton from "./components/FloatingCallButton";
import BottomCTA from "./components/BottomCTA";

import { locationContent, complexContent } from "./data/siteContent";

function App() {
  return (
    <>
      <EventPopup />
      <Header />
      <Hero />

      <ImageSection
        sectionId={locationContent.sectionId}
        sectionTitle={locationContent.sectionTitle}
        sectionDescription={locationContent.sectionDescription}
        items={locationContent.items}
      />

      <ImageSection
        sectionId={complexContent.sectionId}
        sectionTitle={complexContent.sectionTitle}
        sectionDescription={complexContent.sectionDescription}
        items={complexContent.items}
      />

      <FloorplanSection />
      <ContactSection />
      <Footer />
      {/* <FloatingCallButton /> */}
      <BottomCTA />
    </>
  );
}

export default App;