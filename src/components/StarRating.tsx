import React, { useState } from 'react';

const Star = ({ starId, marked }) => {
  return (
    <span star-id={starId} role="button" style={{ color: '#ff9933', cursor: 'pointer' }}>
      {marked ? '\u2605' : '\u2606'}
    </span>
  );
};

const StarRating = props => {
  const [selection, setSelection] = useState(0);
  const [rating, setRating] = useState(0);

  const onclick = e => {
    let starId = 0;
    if (e && e.target && e.target.getAttribute('star-id')) {
      starId = e.target.getAttribute('star-id');
    }
    setSelection(starId);
  };

  return (
    <div>
      <div onClick={onclick}>
        {Array.from({ length: 5 }, (v, i) => (
          <b key={i}>
            <Star starId={i + 1} marked={selection ? selection > i : rating > i} />
          </b>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
