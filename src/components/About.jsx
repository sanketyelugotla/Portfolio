import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-tilt";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";


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
				className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px] mb-5 tracking-widest'
			>
				I'm a passionate <span className="text-[#915EFF]">software developer</span> with hands-on experience in
				<span className="text-[#915EFF]"> Java</span>,
				<span className="text-[#915EFF]"> C++</span>,
				<span className="text-[#915EFF]"> Python</span>, and
				<span className="text-[#915EFF]"> JavaScript</span>. <br /> I specialize in building
				<span className="text-[#915EFF]"> full-stack applications</span> using
				<span className="text-[#915EFF]"> React</span> and
				<span className="text-[#915EFF]"> Node.js</span>, and work with modern databases like
				<span className="text-[#915EFF]"> MongoDB</span> and
				<span className="text-[#915EFF]"> Supabase</span>. <br /> With a strong foundation in
				<span className="text-[#915EFF]"> Android development</span> and
				<span className="text-[#915EFF]"> data structures & algorithms</span>, I focus on creating
				<span className="text-[#915EFF]"> scalable</span>,
				<span className="text-[#915EFF]"> efficient</span>, and
				<span className="text-[#915EFF]"> user-focused</span> solutions. <br /> I'm a
				<span className="text-[#915EFF]"> fast learner</span> who loves collaborating to turn
				<span className="text-[#915EFF]"> innovative ideas</span> into
				<span className="text-[#915EFF]"> impactful real-world applications</span>. <br /> Let’s bring your
				<span className="text-[#915EFF]"> vision</span> to life!
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
