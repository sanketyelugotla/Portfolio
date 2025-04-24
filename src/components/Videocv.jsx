import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from './canvas/Particle';
import { SectionWrapper } from "../hoc";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { navContext } from '../context';
// import { video } from "../assets";

const Videocv = () => {
    // Replace with your actual video URL (YouTube, Vimeo, or hosted file)
    const videoUrl = "https://www.youtube.com/embed/Cza7Gi1hrmA?si=GqHEa25lIjMg_zGh&rel=0"; // For YouTube
    // const videoUrl = "https://player.vimeo.com/video/YOUR_VIDEO_ID"; // For Vimeo
    // const videoUrl = video; // For self-hosted videos

    const { setActive } = useContext(navContext);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col pt-[7rem]">
            <Particle />

            <Container className="relative z-10">
                <Row className="justify-content-center mb-8">
                    <Col lg={8} className="text-center">
                        <h1 className="text-3xl sm:text-4xl font-Volkhov text-white mb-4">
                            My Video Resume
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-300 font-Montserrat">
                            A dynamic presentation of my skills and experience
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col xl={8} lg={10} md={12} className="px-0 sm:px-3">
                        {/* Responsive Video Container */}
                        <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black mx-auto"
                            style={{
                                width: '100%',
                                maxWidth: '900px',
                                aspectRatio: '16/9'
                            }}>
                            <iframe
                                src={videoUrl}
                                title="Video Resume"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full absolute top-0 left-0"
                            />
                            {/* <video
                                controls
                                className="w-full h-full object-cover"
                                poster="/path/to/poster-image.jpg" // Optional thumbnail
                            >
                                <source src={videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video> */}
                            {/* <source src="/videos/my-video.webm" type="video/webm" /> Optional alternative format */}
                        </div>

                        {/* Video Description */}
                        <div className="mt-8 sm:mt-10 p-4 sm:p-6 flex flex-col justify-center items-center text-center mx-auto"
                            style={{ maxWidth: '800px', width: '90%' }}>
                            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 font-Volkhov">
                                About This Video
                            </h2>
                            <p className="text-sm md:text-base text-gray-300 mb-4 px-2 md:px-0 font-Montserrat">
                                This video resume highlights my professional journey, key skills,
                                and what makes me a great candidate. In just a few minutes, you'll
                                get to know me better than any traditional resume could show.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center">
                                <Button
                                    variant="primary"
                                    className="download-btn px-4 py-3 d-flex align-items-center justify-content-center rounded-md"
                                    onClick={
                                        () => {
                                            setActive("Resume")
                                            navigate("/resume")
                                        }}
                                >
                                    <AiOutlineDownload className="inline-block text-[28px] mr-2" />
                                    <span>Download Resume</span>
                                </Button>
                                <Button
                                    variant="primary"
                                    className="download-btn px-4 py-3 d-flex align-items-center justify-content-center rounded-md"
                                    onClick={
                                        () => {
                                            setActive("Contact")
                                            navigate("/");
                                        }}
                                >
                                    <a href="#contact">
                                        Contact Me
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

// export default SectionWrapper(Videocv, "videocv");
export default Videocv