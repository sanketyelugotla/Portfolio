import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";


import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Tech Stack</p>
        <h2 className={`${styles.sectionHeadText}`}>Frameworks.</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-7'>
        {technologies.map((technology) => (
          <div
            className='flex flex-col items-center justify-center w-28 h-28'
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
            <p className="mt-2 text-center text-sm">{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
