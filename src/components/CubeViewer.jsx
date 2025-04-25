import React from 'react';
import './CubeViewer.css';

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const CubeViewer = () => {
    return (
        <>
            <motion.div variants={textVariant()} className="-mt-12 mb-10">
                <p className={`${styles.sectionSubText} `}>The Six Sides of Me</p>
                <h2 className={`${styles.sectionHeadText} sm`}>Each <span className='text-[#915EFF]'>Face</span> tells a story.</h2>
            </motion.div>
            <div className="viewer-wrapper">
                <div className="background-glow"></div>

                <div className="viewer">
                    <input type="radio" name="view" id="front" />
                    <input type="radio" name="view" id="back" />
                    <input type="radio" name="view" id="left" />
                    <input type="radio" name="view" id="right" />
                    <input type="radio" name="view" id="top" />
                    <input type="radio" name="view" id="bottom" />

                    <div className="controls">
                        <label htmlFor="front">💻 Developer</label>
                        <label htmlFor="back">🎨 Designer</label>
                        <label htmlFor="right">📚 Learner</label>
                        <label htmlFor="left">🧠 Thinker</label>
                        <label htmlFor="top">🧑‍🤝‍🧑 Team Player</label>
                        <label htmlFor="bottom">🚀 Creator</label>
                    </div>

                    <div className="scene">
                        <div className="cube-face front" data-tooltip="Main Product View">
                            💻Developer
                            <span>"I build modern web apps"</span>
                        </div>

                        <div className="cube-face back" data-tooltip="Technical Specifications">
                            🎨 Designer
                            <span>"I love clean & intuitive UI"</span>
                        </div>

                        <div className="cube-face right" data-tooltip="Side Components">
                            📚 Learner
                            <span>"Always leveling up"</span>
                        </div>

                        <div className="cube-face left" data-tooltip="Feature Highlights">
                            🧠 Thinker
                            <span> "Problem-solving mindset"</span>
                        </div>

                        <div className="cube-face top" data-tooltip="Top Overview">
                            🧑‍🤝‍🧑 Team Player
                            <span>"Collaboration is key"</span>
                        </div>

                        <div className="cube-face bottom" data-tooltip="Base Details">
                            🚀 Creator
                            <span>"Turning ideas into code"</span>
                        </div>
                    </div>

                    <div className="dot-indicators">
                        <label htmlFor="front"></label>
                        <label htmlFor="back"></label>
                        <label htmlFor="left"></label>
                        <label htmlFor="right"></label>
                        <label htmlFor="top"></label>
                        <label htmlFor="bottom"></label>
                    </div>
                </div>
            </div >
        </>
    );
};

export default SectionWrapper(CubeViewer, "");
