import { JSX as _jsx } from 'react/jsx-runtime';
import { createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './about';
import Contact from './contact';
import Cases from './cases';
import Product from './product';
import Resources from './resources';

export const MyContext = createContext({
  someKey: 'defaultValue',
});

export default function ClientApp() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/product" element={<Product />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  )
}
