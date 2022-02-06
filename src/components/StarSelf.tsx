import React, { useState } from 'react';

const StarSelf = () => {
  const [color, setColor] = useState({ color: 'red' });
  const [toggle, setToggle] = useState({
    star0: false,
    star1: false,
    star2: false,
    star3: false,
    star4: false,
  });

  const { star1, star2, star3, star4, star5 } = toggle;

  const click = e => {
    const starId = e.target.id;
    const changedStar = toggle.starId;
    console.log(setToggle(!star1));
    setToggle({
      ...toggle,
      [starId]: !toggle,
    });
    setColor(toggle ? { color: 'red' } : { color: 'green' });
    console.log(starId);
    console.log(toggle);
  };

  return (
    <div>
      <h2>★</h2>
      <h1>별점 기능 연습장</h1>
      {[...Array(5)].map((e, i) => {
        return (
          <span key={i} id={'star' + i} style={color} onClick={click}>
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarSelf;
