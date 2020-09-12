import React from 'react';

function Honor(props) {
  const { winner: { team, rider, points, hide }, src, alt, teams} = props;
  if (!team) {
    return <></>
  }
  if (hide) {
    return <></>
  }
  const manager = teams[team];
  return (
    <li>
      <img className="jersey" src={src} alt={alt} />
      <span className="rider">
        {rider} [{team}] <span className="manager compact">{manager}:</span> <code>{points}</code>
      </span>
    </li>
  )
}

export default Honor;
