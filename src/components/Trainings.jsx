import React from 'react'
import { SectionWrapper } from "../hoc";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { trainings } from "../constants/Trainings";
import { styles } from "../styles";
import { github, live } from "../assets";


const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    live_link
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 50,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[400px] w-full'
            >
                <div className='relative w-full h-[230px]'>
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        {
                            live_link &&
                            (<div
                                onClick={() => window.open(live_link, "_blank")}
                                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2'
                            >
                                <img
                                    src={live}
                                    alt='source code'
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                            )}
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <img
                                src={github}
                                alt='source code'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>
                </div>


                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px] font-Volkhov'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Trainings = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>Skills in Action</p>
                <h2 className={`${styles.sectionHeadText}`}> <span className='text-[#915EFF]'>Technical</span> Trainings.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]'
                >
                    The trainings listed below highlight my commitment to{" "}
                    <span className='text-[#915EFF]'>continuous learning</span> and staying{" "}
                    <span className='text-[#915EFF]'>up-to-date</span> with the latest{" "}
                    <span className='text-[#915EFF]'>technologies</span>. <br /> These programs helped
                    strengthen my foundation in{" "}
                    <span className='text-[#915EFF]'>core concepts</span>, sharpen my{" "}
                    <span className='text-[#915EFF]'>problem-solving skills</span>, and gain{" "}
                    <span className='text-[#915EFF]'>practical experience</span> with{" "}
                    <span className='text-[#915EFF]'>real-world tools</span> and{" "}
                    <span className='text-[#915EFF]'>frameworks</span> used in modern software
                    development.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7 align-center justify-center'>
                {trainings.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Trainings, "trainings")