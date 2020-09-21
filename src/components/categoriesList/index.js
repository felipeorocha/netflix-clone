import React, { useState } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import size from '../../variables';

import { MoviewRow, Navigator, Title } from './styles';

const CategoriesList = ({ title, items }) => {
const [scroll, setScroll] = useState(0);

  const handlePrevious = () => {
    let marginLeft = scroll + Math.round(window.innerWidth/2);
    // let marginLeft = scroll + 250;
    if (marginLeft > 0) {
      marginLeft = 0;
    }

    setScroll(marginLeft);
  }

  const handleNext = () => {
    let marginRight = scroll - Math.round(window.innerWidth/2);
    // let marginRight = scroll - 250;
    let listWidth = items.results.length * 250;
    if ((window.innerWidth - listWidth) > marginRight) {
      marginRight = (window.innerWidth - listWidth) - 60;
    }

    setScroll(marginRight);
  }

  return (
    <MoviewRow main>
      <Title>{title}</Title>
      <Navigator previous onClick={handlePrevious}>
        <NavigateBeforeIcon fontSize="large" />
      </Navigator>
      <Navigator next onClick={handleNext}>
        <NavigateNextIcon fontSize="large" />
      </Navigator>
      <MoviewRow listarea>
        <MoviewRow
          list
          width={items.results.length * 250}
          scroll={scroll}
        >
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
