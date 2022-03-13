import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
//import stadiaImage from '../../assets/image1.png';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

// let stadiaImage = styled.div``;



const stadiaImage = () => {
    return <div>
        <img src='../../public/image1.png' alt='news' />
    </div>;
}

stadiaImage.propTypes = propTypes;
stadiaImage.defaultProps = defaultProps;
// #endregion

export default stadiaImage;