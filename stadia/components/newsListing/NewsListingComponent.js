import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import NewsHero from "../NewsHero/NewsHero";
import NewsGridText from "../newsGrid/NewsGridText";
import NewsItem from "../NewsItem";
import styles from "./NewsListingComponent.module.css";
import { useState } from "react";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

let NewsStories = [];

const newsStory = (newsItems) => {
  newsItems.map((newsItem) => {
   return <div className='newsStory'><img src={`${newsItem.imgSrc}`} alt='newsStory' />  </div>
  });
}
const NewsItemsContainer = () => {
  const [newsItems, setNewsItems] = useState();

  async function getNewsStories() {
    try {
      const newsStories = await fetch("/api/newsItems")
        .then((response) => response.json())
        .then((data) => {
          setNewsItems(data);
        });

      if (!newsItems) {
        return { notFound: true };
      }

      const props = { newsItems };
      return { props };
    } catch (error) {
      "runtime error: ", error;
    }
  }

  if (newsItems?.length) {
  } else {
    getNewsStories();
  }

  return (
    <div className={`NewsItemsContainer ${styles.NewsItemsContainer}`}>
      <NewsGridText />
      <NewsHero />
      <>
      {newsItems & newsItems?.map(function(newsItem, i){
        return( <div key={i} className={newsItem.name}> <img src={newsItem.imgSrc} alt={newsItem.name}/><p>{newsItem.content}</p></div>)
      })}
      </>
      <div className={`newsCard ${styles.newsCard}`}>"Epicurus in armatum hostem impetum fecisse aut reiciendis voluptatibus maiores." </div>
      <div className={`newsCard ${styles.newsCard}`}>"Epicurus in armatum hostem impetum fecisse aut reiciendis voluptatibus maiores." </div>
      <div className={`newsCard ${styles.newsCard}`}>"Epicurus in armatum hostem impetum fecisse aut reiciendis voluptatibus maiores." </div>
      <div className={`newsCard ${styles.newsCard}`}>"Epicurus in armatum hostem impetum fecisse aut reiciendis voluptatibus maiores." </div>
      <div className={`newsCard ${styles.newsCard}`}>"Epicurus in armatum hostem impetum fecisse aut reiciendis voluptatibus maiores." </div>
      <div className={`newsCard ${styles.newsCard}`}>"Epicurus in armatum hostem impetum fecisse aut reiciendis voluptatibus maiores." </div>

    </div>
  );
};

const NewsListingComponent = () => {
  return (
    <>
      <NewsItemsContainer />
    </>
  );
};

NewsListingComponent.propTypes = propTypes;
NewsListingComponent.defaultProps = defaultProps;
// #endregion

export default NewsListingComponent;
