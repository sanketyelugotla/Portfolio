import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import Typewriter from 'typewriter-effect';

const ServiceCard = ({ index, title, icon }) => (
	<Tilt className='xs:w-[250px] w-full'>
		<motion.div
			variants={fadeIn("right", "spring", index * 0.5, 0.75)}
			className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
		>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
			>
				<img
					src={icon}
					alt='web-development'
					className='w-16 h-16 object-contain'
				/>

				<h3 className='text-white text-[20px] font-bold text-center'>
					{title}
				</h3>
			</div>
		</motion.div>
	</Tilt>
);

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px] mb-5 tracking-wide '
			>
				I'm a passionate software developer with hands-on experience in Java, C++, Python, and JavaScript. I specialize in building full-stack applications using React and Node.js, and work with modern databases like MongoDB and Supabase. With a strong foundation in Android development and data structures & algorithms, I focus on creating scalable, efficient, and user-focused solutions. I'm a fast learner who loves collaborating to turn innovative ideas into impactful real-world applications. Let’s bring your vision to life!
			</motion.p>

			{/* <div className='mt-20 flex flex-wrap gap-10'>
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div> */}
		</>
	);
};

export default SectionWrapper(About, "about");
