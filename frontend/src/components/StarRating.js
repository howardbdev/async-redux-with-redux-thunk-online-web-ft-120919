import React, { useState } from 'react'
import Star from "./Star"

// StarRating component compliments of 30 Seconds of Knowledge, with some tweaks :D
// https://30secondsofknowledge.com/
const StarRating = (props) => {

  const [selection, setSelection] = useState(0);
  const hoverOver = event => {
    let val = 0;
    if (event && event.target && event.target.getAttribute("star-id")) {
      val = event.target.getAttribute("star-id");
    }
    setSelection(val);
  }

  return (
    <div className="StarRating"
      onMouseOut={() => hoverOver(null)}
      onClick={(event) => {
          props.handleStarClick(event.target.getAttribute("star-id"))
        }
      }
      onMouseOver={hoverOver}
    >
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1} `}
          marked={selection ? selection >= i + 1 : props.rating >= i + 1}
        />
      ))}
    </div>
  );
}

export default StarRating
