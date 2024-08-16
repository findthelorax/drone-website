"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeCard from "@/components/HomeCard";
import HomeSlogan from "@/components/HomeSlogan";
import HomeButton from "@/components/HomeButton";
import ServicesCard from "@/components/ServicesCard";
import ContactSection from "@/components/ContactSection";
import VideoBackground from "@/components/VideoBackground";
import YouTube from "@/components/YouTube";
import VideosCard from "@/components/VideosCard";
import homeStyles from "@/styles/home.module.css";

export default function Home() {
  return (
    <>
      <div className={homeStyles.navbar}>
        <Navbar />
      </div>
      <main className={homeStyles.mainContainer}>
        <section id="section1" className={`${homeStyles.section} ${homeStyles.section1}`}>
          <VideoBackground />
          <HomeSlogan />
          <HomeCard />
          <HomeButton />
        </section>
        <section id="section2" className={`${homeStyles.section2}`}>
          <VideosCard />
        </section>
        <section id="section3" className={`${homeStyles.section3}`}>
          <ServicesCard />
        </section>
        <section id="section4" className={`${homeStyles.section4}`}>
          <ContactSection />
        </section>
        <Footer />
      </main>
    </>
  );
}