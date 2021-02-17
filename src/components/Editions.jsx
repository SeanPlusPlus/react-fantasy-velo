import React from 'react';
import {
  Link,
} from 'react-router-dom';
import useGlobal from '../store';

function Editions() {
  const [state] = useGlobal();
  const { editions } = state;
  return (
    <>
      <div className="row">
        <div className="column">
          <h3>
            Editions
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <ul>
            {editions.map((edition) => (
              <li
                key={edition}
                className="editions"
              >
                <Link to={'/editions/' + edition}>{edition}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Editions;
