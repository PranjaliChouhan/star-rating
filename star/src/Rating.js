import React, { useState } from 'react';
import clickSound from './assets/audio.wav';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
    // You can use 'selectedRating' to send the rating to the server or perform any other actions.
    console.log(`Rated ${selectedRating} stars.`);
    playClickSound(); 
  };
  const starSize = '50px'; 
  return (
    <div className='star-rating'>
      <h2>Rate this item:</h2>
      <div>
        {[1, 2, 3, 4, 5].map((starNumber) => (
          <span
            key={starNumber}
            style={{ cursor: 'pointer', fontSize: starSize, color: starNumber <= rating ? 'gold' : 'gray' }}
            onClick={() => handleRatingClick(starNumber)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};
const playClickSound = () => {
  const audio = new Audio(clickSound);
  audio.play();
};

export default StarRating;