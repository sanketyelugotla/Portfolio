import { About, Certifications, Contact, Education, Hero, StarsCanvas, Tech, Trainings, Works, CubeViewer, Social, Github } from "./components";
import Particle from "./components/canvas/Particle";

const Layout = () => {
    return (
        <>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                {/* <Navbar /> */}

                {/* Pic + name and into */}
                <Hero />
            </div>
            <Particle />
            {/* Description about me */}
            <About />

            {/* Six faces */}
            <CubeViewer />
            <div style={{ marginTop: "100px" }} />

            {/* Projects */}
            <Works />

            {/* Experience in future */}
            {/* <Experience /> */}

            {/* Educatoin */}
            <Education />

            {/* Skills */}
            <Tech />


            {/* Training */}
            <Trainings />

            {/* Certifications */}
            <Certifications />

            {/* Testimonals */}
            {/* <Feedbacks /> */}

            {/* <Github /> */}

            <div className='relative z-0'>
                {/* Contact form */}
                <Contact />

                {/* Background stars */}
                <StarsCanvas />
            </div>

            {/* Social media links */}
            {/* <Social /> */}
        </>

    );
}

export default Layout;
