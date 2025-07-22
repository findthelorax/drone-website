'use client';

import React from 'react';
import Image from 'next/image';
import { GiDinosaurBones, GiRocket, GiSharpSmile } from 'react-icons/gi';
import styles from '@/styles/home.module.css';
import homeStyles from '@/styles/home.module.css';
import Navbar from '@/components/Navbar';

const funFacts = [
	{ icon: <GiRocket size={30} />, text: 'I love trying out new ideas 🚀' },
	{ icon: <GiDinosaurBones size={30} />, text: 'Dinosaur facts enthusiast 🦖' },
	{ icon: <GiSharpSmile size={30} />, text: 'Always up for a challenge 🤺' },
];

export default function About() {
	return (
		<main className={styles.mainContainer}>
			<Navbar />
			<section className={styles.section3} style={{ textAlign: 'center', padding: '3rem 1rem' }}>
				<h1 style={{ fontFamily: "'Jura', sans-serif", fontSize: '4rem', color: '#68BCDF' }}>About Me</h1>
				<Image
					src="/assets/declan1-nobg.png"
					alt="Fun Profile"
					width={200}
					height={200}
					style={{ borderRadius: '50%', margin: '2rem auto' }}
				/>
				<p style={{ fontSize: '1.5rem', maxWidth: '600px', margin: '2rem auto', color: '#333' }}>
					Hi! I'm Declan, a drone pilot and lover of all things fun and quirky. I fly drones over Vermont and
					hunt for dinosaur tracks. Let's make something awesome together!
				</p>
				<div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
					{funFacts.map((fact, idx) => (
						<div
							key={idx}
							style={{
								background: '#fff',
								color: '#000',
								borderRadius: '15px',
								boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
								padding: '1.5rem',
								minWidth: '180px',
								fontSize: '1.2rem',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							{fact.icon}
							<span style={{ marginTop: '1rem' }}>{fact.text}</span>
						</div>
					))}
				</div>
				<div style={{ marginTop: '3rem', fontSize: '1.3rem', color: '#68BCDF' }}>
					<span>
						Want to know more?{' '}
						<a href="/#contact" style={{ textDecoration: 'underline', color: '#68BCDF' }}>
							Contact me!
						</a>
					</span>
				</div>
			</section>
		</main>
	);
}
