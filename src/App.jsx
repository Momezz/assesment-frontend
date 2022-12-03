import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import SeeDetails from './components/SeeDetails/SeeDetails';
import Questions from './components/Questions/Questions';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product-detail" element={<ProductDetail />} />
    <Route path="/about" element={<About />} />
    <Route path="/details/:id" element={<SeeDetails />} />
    <Route path="/questions" element={<Questions />} />
  </Routes>
);

export default App;
