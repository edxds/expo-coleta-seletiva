import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as HomeIcon } from '../../assets/icons/home-icon.svg';
import { ReactComponent as RecyclingIcon } from '../../assets/icons/recycling-icon.svg';
import { ReactComponent as GalleryIcon } from '../../assets/icons/gallery-icon.svg';

import styles from './styles/nav-sidebar.module.scss';

const ids = {
  '/': 'home',
  '/processo': 'process',
  '/galeria': 'gallery',
};

const NavSidebar = () => {
  const [activeId, setActiveId] = useState('home');
  useEffect(() => {
    const { pathname } = window.location;
    const id = ids[pathname];

    if (activeId !== id) {
      setActiveId(id);
    }
  });

  const getClassname = id =>
    `${styles.item} ${id === activeId ? styles.active : ''}`;

  return (
    <div className={styles.sidebar}>
      <Link to="/" className={getClassname('home')}>
        <div className={styles.iconContainer}>
          <HomeIcon />
        </div>
        Início
      </Link>
      <Link to="/processo" className={getClassname('process')}>
        <div className={styles.iconContainer}>
          <RecyclingIcon style={{ marginTop: 1 }} />
        </div>
        Processo
      </Link>
      <Link to="/galeria" className={getClassname('gallery')}>
        <div className={styles.iconContainer}>
          <GalleryIcon />
        </div>
        Galeria
      </Link>
    </div>
  );
};

export default NavSidebar;
