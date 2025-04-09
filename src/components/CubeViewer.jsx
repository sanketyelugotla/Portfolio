import React from 'react';
import './CubeViewer.css'; // use your CSS file here

const CubeViewer = () => {
    return (
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
                    <label for="front">Web Developer</label>
                    <label for="back">React Native Developer</label>
                    <label for="right">Backend Developer</label>
                    <label for="left">Competitive Coding</label>
                    <label for="top">Data Science</label>
                    <label for="bottom">Devops Virtualisation & Version Control</label>
                </div>

                <div class="scene">
                    <div class="cube-face front" data-tooltip="Main Product View">
                        Web Developer
                        <span>MERN Stack</span>
                    </div>

                    <div class="cube-face back" data-tooltip="Technical Specifications">
                        React Native Developer
                        <span>Mobile Apps</span>
                    </div>

                    <div class="cube-face right" data-tooltip="Side Components">
                        Backend Developer
                        <span>Node Js & MongoDb, Supabase</span>
                    </div>

                    <div class="cube-face left" data-tooltip="Feature Highlights">
                        Competitive Coding
                        <span>Java and DSA</span>
                    </div>

                    <div class="cube-face top" data-tooltip="Top Overview">
                        Data Science
                        <span>Python, R Programming</span>
                    </div>

                    <div class="cube-face bottom" data-tooltip="Base Details">
                        Devops Virtualisation
                        <span>Docker</span>
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
        </div>
    );
};

export default CubeViewer;
