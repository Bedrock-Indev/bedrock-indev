import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Cases from './components/pages/Cases';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import Product from './components/pages/Product';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/cases" element={ <Cases /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/products" element={ <Product /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </Router>
  );
}

export default App;