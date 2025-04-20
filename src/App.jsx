import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Resume, Navbar } from "./components"
import Layout from "./Layout";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;

