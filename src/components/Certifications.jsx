import { motion } from "framer-motion";
import React from "react";
import certifications from "../constants/Certifications";
import { SectionWrapper } from "../hoc";

import Tilt from "react-tilt";

import { live } from "../assets";
import { fadeIn } from "../utils/motion";


import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const CertificateCard = ({ index, title, icon, date, certificateLink }) => {
	return (
		<Tilt className='xs:w-[350px] w-full'>
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
					className='bg-tertiary rounded-[20px] py-8 px-5 min-h-[400px] flex justify-evenly items-center flex-col'
				>
					{/* Certificate Icon Image */}
					<div className="relative w-full h-[200px]">
						<img
							src={icon}
							alt={title}
							className="w-full h-full object-cover rounded-2xl"
						/>

						{/* View Button */}
						{certificateLink && (
							<div className="absolute inset-0 flex justify-end m-2 card-img_hover">
								<div
									onClick={() => window.open(certificateLink, "_blank")}
									className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
								>
									<img
										src={live}
										alt="View Certificate"
										className="w-1/2 h-1/2 object-contain rounded-full"
									/>
								</div>
							</div>
						)}
					</div>

					{/* Certificate Details */}
					<div className="mt-4">
						<h3 className="text-white font-bold text-[18px] font-Volkhov">
							{title}
						</h3>
						<p className="mt-1 text-secondary text-[13px]">{date}</p>
					</div>
				</div>
			</motion.div>
		</Tilt>
	);
};


const Certifications = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} text-left`}>
					Certified Skills & Knowledge
				</p>
				<h2 className={`${styles.sectionHeadText} text-left`}>
					Certifications
				</h2>
			</motion.div>
			<div className="mt-20 flex flex-wrap gap-10 justify-center">
				{certifications.map((cert, index) => (
					<CertificateCard key={cert.title} index={index} {...cert} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Certifications, "");