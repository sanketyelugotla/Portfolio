import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Education, Trainings, Certifications } from "./components";
import CubeViewer from "./components/CubeViewer";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />

          {/* Pic + name and into */}
          <Hero />
        </div>

        {/* Description about me */}
        <About />

        {/* Six faces */}
        <CubeViewer />

        <div style={{ marginTop: "100px" }} />

        {/* Experience in future */}
        {/* <Experience /> */}

        {/* Educatoin */}
        <Education />

        {/* Skills */}
        <Tech />

        {/* Projects */}
        <Works />

        {/* Training */}
        <Trainings />

        {/* Certifications */}
        <Certifications />

        {/* Testimonals */}
        <Feedbacks />

        <div className='relative z-0'>
          {/* Contact form */}
          <Contact />

          {/* Background stars */}
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
