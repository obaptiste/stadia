import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styles from './NewsGridText.module.css';


// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

const content = 'Harlequins crowned Premiership Champions'


/**
 * 
 */
const NewsGridText = () => {
    return <div classname={`NewsGridText ${styles.NewsGridText}`}>{content}</div>;
}

NewsGridText.propTypes = propTypes;
NewsGridText.defaultProps = defaultProps;
// #endregion

export default NewsGridText;