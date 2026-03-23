import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header.jsx'
import Home from './pages/Home.jsx';
import Solutions from './pages/Solutions.jsx';
import WhoWeServe from './pages/WhoWeServe.jsx';
import SelfHelp from './pages/SelfHelp.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <BrowserRouter basename="/FamilySiteReact/">
      <Header />

      <main  id="MainContent" className="content-for-layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/who-we-serve" element={<WhoWeServe />} />
          <Route path="/self-help" element={<SelfHelp />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App