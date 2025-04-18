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
                <h2 className={`${styles.sectionHeadText}`}>Each face tells a story.</h2>
            </motion.div>
            <div className="viewer-wrapper">
                <div class="background-glow"></div>

                <div class="viewer">
                    <input type="radio" name="view" id="front" />
                    <input type="radio" name="view" id="back" />
                    <input type="radio" name="view" id="left" />
                    <input type="radio" name="view" id="right" />
                    <input type="radio" name="view" id="top" />
                    <input type="radio" name="view" id="bottom" />

                    <div class="controls">
                        <label for="front">💻 Developer</label>
                        <label for="back">🎨 Designer</label>
                        <label for="right">📚 Learner</label>
                        <label for="left">🧠 Thinker</label>
                        <label for="top">🧑‍🤝‍🧑 Team Player</label>
                        <label for="bottom">🚀 Creator</label>
                    </div>

                    <div class="scene">
                        <div class="cube-face front" data-tooltip="Main Product View">
                            💻Developer
                            <span>"I build modern web apps"</span>
                        </div>

                        <div class="cube-face back" data-tooltip="Technical Specifications">
                            🎨 Designer
                            <span>"I love clean & intuitive UI"</span>
                        </div>

                        <div class="cube-face right" data-tooltip="Side Components">
                            📚 Learner
                            <span>"Always leveling up"</span>
                        </div>

                        <div class="cube-face left" data-tooltip="Feature Highlights">
                            🧠 Thinker
                            <span> "Collaboration is key"</span>
                        </div>

                        <div class="cube-face top" data-tooltip="Top Overview">
                            🧑‍🤝‍🧑 Team Player
                            <span>"Problem-solving mindset"</span>
                        </div>

                        <div class="cube-face bottom" data-tooltip="Base Details">
                            🚀 Creator
                            <span>"Turning ideas into code"</span>
                        </div>
                    </div>

                    <div class="dot-indicators">
                        <label for="front"></label>
                        <label for="back"></label>
                        <label for="left"></label>
                        <label for="right"></label>
                        <label for="top"></label>
                        <label for="bottom"></label>
                    </div>
                </div>
            </div >
        </>
    );
};

export default SectionWrapper(CubeViewer, "");
