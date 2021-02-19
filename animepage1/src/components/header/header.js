import React from 'react';

import './styles.scss';
import logo from '../../assets/animepagelogo.png';
import search from '../../assets/lupa.svg';

function Header() {
  return (
    <div className="contenedor">
      <div className="logo">
        <img className="image" src={logo} alt="logo" />
      </div>
      <div className="subcontenedor">
        <div className="search">
          <form className="form" action="/action_page.php">
            <input type="text" className="input" placeholder="Search Anime..." name="search" />
            <button className="button" type="submit">
              <img className="button" src={search} type="submit" />
            </button>
          </form>
          <div>facebook</div>
        </div>
        <div className="section">
          <h1 className="subsection">index</h1>
          <h1 className="subsection">Schedule</h1>
          <h1 className="subsection">Discord</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
