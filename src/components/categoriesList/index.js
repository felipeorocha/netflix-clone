import React from 'react';

import size from '../../variables';

import { MoviewRow, Title } from './styles';

const CategoriesList = ({ title, items }) => {

  return (
    <MoviewRow main>
      <Title>{title}</Title>
      <MoviewRow listarea>
        <MoviewRow list>
          { items.results.length > 0 && items.results.map((item, key) => {
            return (
              <MoviewRow key={key} item>
                <img
                  src={`https://image.tmdb.org/t/p/${size.small}${item.poster_path}`}
                  alt={item.original_title}
                />
              </MoviewRow>
            );
          }) }
        </MoviewRow>
      </MoviewRow>
    </MoviewRow>
  );
}

export default CategoriesList;
