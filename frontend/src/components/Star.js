import React from 'react'

function Star({ marked, starId }) {
  return (
    <span className="Star" star-id={starId} style={{ color: "#ff9933" }} role="button">
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
}

export default Star
