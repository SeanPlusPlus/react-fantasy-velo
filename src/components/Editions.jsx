import React from 'react';
import useGlobal from '../store';

function Editions() {
  const [state] = useGlobal();
  const { editions } = state;
  return (
    <div className="Editions">
      <h3>
        Editions
      </h3>
      <ul>
        {editions.map((edition) => (
          <li
            key={edition}
            className="editions"
          >
            <a href={'/editions/' + edition}>{edition}</a>
          </li>
        ))}
       </ul>
    </div>
  );
}

export default Editions;
