import React from 'react';

function Honor(props) {
  const { winner: { team, rider, points }, src, alt } = props;
  if (!team) {
    return <></>
  }
  return (
    <li>
      <img className="jersey" src={src} alt={alt} />
      <span className="rider">
        {rider} [{team}] <code>{points}</code>
      </span>
    </li>
  )
}

export default Honor;
