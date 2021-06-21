import React from 'react';
import {
  Link,
} from 'react-router-dom';
import _keys from 'lodash/keys';
import _sortBy from 'lodash/sortBy';
import useGlobal from '../store';

function Editions() {
  const [state] = useGlobal();
  const { editions } = state;
  const edition_years = _sortBy(_keys(editions));
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
            {edition_years.map((edition) => (
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
