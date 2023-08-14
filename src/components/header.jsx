import React from 'react';

    const Header = ({ onMenuItemClick }) => {
        const menuItems = ['About', 'Portfolio', 'Contact', 'Resume'];
    return (
        <div class="header">
        <div class="name">Kyla Wise</div>
        <ul className="menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="menu-item"
            onClick={() => onMenuItemClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
      </div>
    );
};


export default Header;