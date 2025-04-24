import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Resume, Navbar, Social, Videocv } from "./components"
import Layout from "./Layout";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/videoCv" element={<Videocv />} />
        </Routes>

        {/* Social media links */}
        <Social />

      </div>

    </BrowserRouter>
  );
}

export default App;

