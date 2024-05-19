import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from './header.module.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate(`/search?q=${searchTerm}`);
      setSearchTerm('');
    }
  };




  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.input}>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder='Search'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FontAwesomeIcon className={classes.search} icon={faSearch} />
          </form>
        </div>
      </nav>
      <Outlet />
    </header>
  );
}

export default Header;
