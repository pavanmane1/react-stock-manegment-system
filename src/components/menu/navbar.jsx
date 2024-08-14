import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Sidebardata } from './sidebardata';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar({ onLogout }) {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  const showSidebar = () => setSidebar(!sidebar);

  const handleLogout = () => {
    // Clear the authentication token and update state
    localStorage.removeItem('token');
    onLogout(); // Update the authentication state in the App component
    navigate('/'); // Redirect to login page
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {Sidebardata.map((item, index) => (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}

            {/* Logout Button */}
            <li className="nav-text">
              <Link to="#" onClick={handleLogout}>
                <AiIcons.AiOutlineLogout />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
