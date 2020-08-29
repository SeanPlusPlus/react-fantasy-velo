import React from 'react';

function Honor(props) {
  if (!props.winner.team) {
    return <></>
  }
  return (
    <li>
      <img className="jersey" src={props.src} alt={props.alt} />
      <span className="rider">
        {props.winner.rider} [{props.winner.team}]
      </span>
    </li>
  )
}

export default Honor;
