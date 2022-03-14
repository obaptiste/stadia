import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SImage from '../stadiaImgComponent/stadiaImage';
import styles from './NewsHero.module.css'

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const NewsHero = () => {
    return <div className={`NewsHero ${styles.NewsHero}`}>
        <p>lorem ipsum</p>
    </div>;
}

NewsHero.propTypes = propTypes;
NewsHero.defaultProps = defaultProps;
// #endregion

export default NewsHero;