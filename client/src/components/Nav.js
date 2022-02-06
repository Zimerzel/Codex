import React from 'react'
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Nav = () => {
  //when user clicks a menu link or the element lost focus within the nav menu, close it
  
  function navDrop() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classNameList.contains('show')) {
          openDropdown.classNameList.remove('show');
        }
      }
    }
  }

  return (
    <>
    <div className='nav__title'><h1>Codex</h1></div>
    <nav className="main__nav">
      <ul>
      <li>
          <HashLink to="#games" smooth className="nav-link hover-underline-animation" id="games-btn">
            Games
          </HashLink>
        </li>
        <li>
          <NavLink to="/" className="nav-link hover-underline-animation">
            Home
          </NavLink>
        </li>
      </ul>
      <nav className='nav__dropdown'>
        <div className="dropdown">
          <button onClick={navDrop} className="dropbtn"></button>
          <div id="myDropdown" className="dropdown-content">
            <ul>
              <li>
                <NavLink to="/" className="nav-link" onClick={navDrop}>
                  Home
                </NavLink>
              </li>
              <li>
                <HashLink to="#games" smooth className="nav-link" id="games-btn">
                  Games
                </HashLink>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </nav>
    </>
  );
};

export default Nav;