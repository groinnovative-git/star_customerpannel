import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import PropertyDetail from './pages/PropertyDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import LeadPopup from './components/LeadPopup';

function App() {
  const { pathname } = useLocation();
  const is404 = !['/', '/about', '/services', '/services/details', '/contact'].includes(pathname);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <LeadPopup />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/details/:id" element={<PropertyDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      {!is404 && <FloatingActions />}
    </>
  );
}

export default App;
