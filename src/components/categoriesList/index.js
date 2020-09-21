import React from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import size from '../../variables';

import { MoviewRow, Navigator, Title } from './styles';

const CategoriesList = ({ title, items }) => {

  return (
    <MoviewRow main>
      <Title>{title}</Title>
      <Navigator previous>
        <NavigateBeforeIcon fontSize="large" />
      </Navigator>
      <Navigator next>
        <NavigateNextIcon fontSize="large" />
      </Navigator>
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
