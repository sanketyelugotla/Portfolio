import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education } from "../constants/Education";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const TimelineCard = ({ item }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: "#1d1836",
				color: "#fff",
			}}
			contentArrowStyle={{ borderRight: "7px solid  #232631" }}
			date={item.date}
			iconStyle={{ background: item.iconBg }}
			icon={
				<div className='flex justify-center items-center w-full h-full'>
					<img
						src={item.icon}
						alt={item.company_name}
						className='w-[100%] h-[100%] object-contain rounded-full'
					/>
				</div>
			}
		>
			<div>
				<h3 className='text-white text-[23px] font-bold'>{item.title}</h3>
				<p
					className='text-secondary text-[20px] font-semibold mt-2'
					style={{ margin: 0 }}
				>
					{item.company_name}
				</p>
			</div>

			<ul className='mt-5 list-disc ml-5 space-y-2'>
				{item.points.map((point, index) => (
					<li
						key={`point-${index}`}
						className='text-white-100 text-[14px] pl-1 tracking-wider'
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} text-center`}>
					My Professional Journey
				</p>
				<h2 className={`${styles.sectionHeadText} text-center`}>
					Education
				</h2>
			</motion.div>

			<div className='mt-20 flex flex-col'>
				<VerticalTimeline>
					{[...education].sort((a, b) => new Date(b.date.split(' - ')[0]) - new Date(a.date.split(' - ')[0])).map((item, index) => (
						<TimelineCard
							key={`item-${index}`}
							item={item}
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, "work");