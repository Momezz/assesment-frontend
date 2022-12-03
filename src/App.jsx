import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Answers from './pages/Answers/Answers';
import Details from './pages/ProductDetail/Details';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/answers" element={<Answers />} />
    <Route path="/details/:id" element={<Details />} />
  </Routes>
);

export default App;
