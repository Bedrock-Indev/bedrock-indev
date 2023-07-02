import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Cases from './components/Cases';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Product from './components/Product';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/cases" element={ <Cases /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/product" element={ <Product /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </Router>
  );
}

export default App;