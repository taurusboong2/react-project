import React, { useState } from 'react';

const StarSelf = () => {
  const [color, setColor] = useState({ color: 'red' });
  const [toggle, setToggle] = useState(false);

  const click = () => {
    setToggle(!toggle);
    setColor(toggle ? { color: 'red' } : { color: 'green' });
  };

  return (
    <div>
      <h2 style={color} onClick={click}>
        ★
      </h2>
      <h1>별점 기능 연습장</h1>
      {[...Array(5)].map((e, i) => {
        return (
          <span key={i} style={color} onClick={click}>
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarSelf;
