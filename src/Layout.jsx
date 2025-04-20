import { About, Certifications, Contact, Education, Hero, StarsCanvas, Tech, Trainings, Works, CubeViewer } from "./components";


const Layout = () => {
    return (
        <>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                {/* <Navbar /> */}

                {/* Pic + name and into */}
                <Hero />
            </div>

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

            <div className='relative z-0'>
                {/* Contact form */}
                <Contact />

                {/* Background stars */}
                <StarsCanvas />
            </div>
        </>

    );
}

export default Layout;
