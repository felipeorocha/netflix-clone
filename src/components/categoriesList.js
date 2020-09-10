import React from 'react';
import styled, { css } from 'styled-components'

import size from '../variables';

const CategoriesList = ({ key, title, items }) => {
  const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

  return (
    <>
      {/* <Button primary>Button</Button> */}
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        { items.results.length > 0 && items.results.map((item, key) => {
          return (
            <img
              src={`https://image.tmdb.org/t/p/${size.small}${item.poster_path}`}
              alt={item.original_title}
            />
          );
        }) }
      </div>
    </>
  );
}

export default CategoriesList;
