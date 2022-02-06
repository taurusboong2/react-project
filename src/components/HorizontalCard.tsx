import React from 'react';
import logo from '../logo.jpg';
import StarRating from './StarRating';

const HorizontalCard = ({ des }) => {
  return (
    <div className="hz_wrap">
      <img src={logo} className="logo" alt="logo" />
      <div className="text_wrap">
        <p className="label">card label</p>
        <h3 className="title">card title</h3>
        {des && (
          <p className="high">
            highlight <b>Cross Out</b>
          </p>
        )}
        <div className="rate_wrap">
          <StarRating />
        </div>
        {des && <p className="des">Lorem ipsum dolor sit.</p>}
      </div>
    </div>
  );
};

export default HorizontalCard;
