import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as ChevronHorizontal } from '../../assets/icons/chevron-horizontal.svg';
import styles from './styles/carousel.module.scss';

const CarouselItem = ({ children }) => (
  <div className={styles.carouselItem}>{children}</div>
);

const Carousel = ({ children }) => {
  const [translate, setTranslate] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(-1);
  const [disabledPaging, setDisabledPaging] = useState('left');
  const containerEl = useRef(null);

  const evaluateItemsPerPage = () => {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    const newItemsPerPage = isDesktop ? 2 : 1;

    // when there's two items per page,
    // the maxTranslate becomes -850%.
    // this rounds it to -800%. Since
    // we start at 0, we add 100, so it
    // becomes -700%.
    const newMaxTranslate = Math.ceil(15 / newItemsPerPage) * -100 + 100;

    setItemsPerPage(newItemsPerPage);
    setMaxTranslate(newMaxTranslate);
  };

  const evaluateTranslate = () => {
    // keeps it from overflowing. if the current
    // translation is greater (smaller) than the
    // maximum, then we revert it to the maximum.
    if (translate < maxTranslate) {
      const newTranslate = maxTranslate;
      setTranslate(newTranslate);
    }
  };

  useEffect(
    () => {
      evaluateItemsPerPage();
      evaluateTranslate();
    },
    [itemsPerPage, maxTranslate, translate]
  );

  useEffect(
    () => {
      window.addEventListener('resize', evaluateItemsPerPage);
      return () => {
        window.removeEventListener('resize', evaluateItemsPerPage);
      };
    },
    [itemsPerPage, maxTranslate]
  );

  useEffect(() => {
    window.addEventListener('resize', evaluateTranslate);
    return () => {
      window.removeEventListener('resize', evaluateTranslate);
    };
  });

  useEffect(
    () => {
      if (translate <= maxTranslate) {
        setDisabledPaging('right');
      } else if (translate === 0) {
        setDisabledPaging('left');
      } else {
        setDisabledPaging('');
      }
    },
    [disabledPaging, translate]
  );

  const next = () => {
    setTranslate(translate - 100);
  };

  const previous = () => {
    setTranslate(translate + 100);
  };

  const isLeftDisabled = disabledPaging === 'left';
  const isRightDisabled = disabledPaging === 'right';
  const leftVisibility = isLeftDisabled ? styles.disabled : '';
  const rightVisibility = isRightDisabled ? styles.disabled : '';

  const buttonPosition = containerEl.current
    ? (containerEl.current.clientWidth / itemsPerPage) * (3 / 4) - 44
    : 'inherit';

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={`${styles.pagingBtn} ${styles.right} ${rightVisibility}`}
        style={containerEl.current ? { top: buttonPosition } : {}}
        disabled={isRightDisabled}
        onClick={next}
      >
        <ChevronHorizontal />
      </button>
      <button
        type="button"
        className={`${styles.pagingBtn} ${styles.left} ${leftVisibility}`}
        style={containerEl.current ? { top: buttonPosition } : {}}
        disabled={isLeftDisabled}
        onClick={previous}
      >
        <ChevronHorizontal />
      </button>
      <div
        ref={containerEl}
        className={styles.carousel}
        style={{ transform: `translateX(${translate}%)` }}
      >
        {children}
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  children: PropTypes.node.isRequired,
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CarouselItem };
export default Carousel;
