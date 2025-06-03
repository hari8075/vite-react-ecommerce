import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import {
  Home,
  Shirts,
  Shoes,
  HeadPhones,
  About,
  Contact,
  Cart,
  AllProducts,
  SingleProduct,
  Error,
} from './pages';

// components
import Navbar from './components/Navbar/Navbar';
import CartSidebar from './components/CartSidebar/CartSidebar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

// scroll to top component
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <CartSidebar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/headphones" element={<HeadPhones />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App; 