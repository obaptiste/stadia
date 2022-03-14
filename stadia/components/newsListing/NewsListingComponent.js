
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NewsHero from '../NewsHero/NewsHero';
import NewsGridText from '../newsGrid/NewsGridText';
import NewsItem from '../NewsItem';
import styles from './NewsListingComponent.module.css';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};




 const NewsItemsContainer = () => {
     return <div className={`NewsItemsContainer ${styles.NewsItemsContainer}`}>
       <NewsGridText/>
       <NewsHero />
       <>

       </>
       <div className="newsCard"/>
      
     </div>
 }
 
const NewsListingComponent = () => {
    return <>
     <NewsItemsContainer/>
    </>;
}

NewsListingComponent.propTypes = propTypes;
NewsListingComponent.defaultProps = defaultProps;
// #endregion

export default NewsListingComponent;