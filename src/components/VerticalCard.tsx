import React from 'react';
import logo from '../logo.jpg';
import StarRating from './StarRating';

const VerticalCard = () => {
  return (
    <div className="vc_wrap">
      <img src={logo} className="logo" alt="logo" />
      <div className="text_wrap">
        <p className="label">card label</p>
        <h3 className="title">card title</h3>
        <p className="high">
          highlight <b>Cross Out</b>
        </p>
        <div className="rate_wrap">
          <StarRating />
        </div>
        <p className="des">Lorem ipsum dolor sit.</p>
      </div>
    </div>
  );
};

export default VerticalCard;
