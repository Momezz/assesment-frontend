import './styles.css';
import { Link } from 'react-router-dom';

const NavigationBar = () => (
  <nav className="navigation__card">
    <ul className="navigation__ul">
      <li className="navigation__menu-li">
        <Link className="navigation__text" to="/">HOME</Link>
      </li>
      <li className="navigation__li">
        <Link className="navigation__text" to="/about">ABOUT</Link>
      </li>
      <li className="navigation__menu-li">
        <Link className="navigation__text" to="/answers">ANSWERS</Link>
      </li>
    </ul>
  </nav>
);

export default NavigationBar;
