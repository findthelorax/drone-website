'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeCard from '@/components/HomeCard';
import HomeSlogan from '@/components/HomeSlogan';
import HomeButton from '@/components/HomeButton';
import ServicesCard from '@/components/ServicesCard';
import ContactSection from '@/components/ContactSection';
import VideoBackground from '@/components/VideoBackground';
import DroneFlying from '@/components/DroneFlying';
import FAQ from '@/components/FAQ';
import Metrics from '@/components/Metrics';
import VideoSlider from '@/components/VideoSlider';
import homeStyles from '@/styles/home.module.css';

export default function Home() {
	return (
		<>
			<main className={homeStyles.mainContainer}>
				<section id="section1" className={`${homeStyles.section1}`}>
					<Navbar />
					<VideoBackground />
					<HomeSlogan />
					<HomeCard />
					<HomeButton />
				</section>
				<section id="section2" className={`${homeStyles.section2}`}>
					<DroneFlying />
					<VideoSlider />
				</section>
				<section id="section3" className={`${homeStyles.section3}`}>
					<ServicesCard />
				</section>
				<section id="section4" className={`${homeStyles.section4}`}>
					<FAQ />
					<Metrics />
				</section>
				<section id="contact" className="contact-section">
					<ContactSection />
				</section>
				<Footer />
			</main>


		</>
	);
}
