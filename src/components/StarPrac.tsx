import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ key, selected = false, onSelect = f => f }) => (
  <FaStar color={selected ? 'red' : 'grey'} /* onClick={onSelect} */ />
);

const StarPrac = () => {
  const [selectedStars, setSelectedStars] = useState(3);

  return (
    <div>
      {[...Array(5)].map((n, i) => (
        <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />
      ))}
      <p>{selectedStars} / 5</p>
    </div>
  );
};

export default StarPrac;
