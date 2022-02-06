import classNames from 'classnames';
import React from 'react';
import logo from '../logo.jpg';
import './card.scss';

const Card = ({ display, des = true }) => {
  return (
    <div className={classNames('cardwrap', display)}>
      <img src={logo} className="logo" alt="logo" />
      <div className="text_wrap">
        <p className="label">card label</p>
        <h3 className="title">card title</h3>
        <p className="high">
          highlight <b>Cross Out</b>
        </p>
        <div className="rate_wrap">
          {[...Array(5)].map((e, i) => {
            return (
              <span key={i} className="stars">
                ●
              </span>
            );
          })}
        </div>
        {des && <p className="des">Lorem ipsum dolor sit.</p>}
      </div>
    </div>
  );
};

// Card.defaultProps = {
//   display: 'hz',
// };

export default Card;
screenX;
