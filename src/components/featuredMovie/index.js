import React from 'react';

import {
  FeaturedContainer,
  Fade,
  Featured,
  FeaturedName,
  FeaturedInfo,
  FeaturedPoints,
  FeaturedDescription,
  FeaturedButtonsContainer,
  FeaturedGenres,
  FeaturedButtons
} from './styles';

const FeaturedMovie = ({ item }) => {

  const onAirAt = new Date(item.first_air_date);

  return (
    <FeaturedContainer item={item}>
      <Fade vertical>
        <Fade horizontal>
          <FeaturedName>{item.original_name}</FeaturedName>
          <FeaturedInfo>
            <FeaturedPoints>{item.vote_average} pontos</FeaturedPoints>
            <Featured>{onAirAt.getFullYear()}</Featured>
            <Featured>{item.number_of_seasons} temporada{ item.number_of_seasons > 1 ? 's' : '' }</Featured>
          </FeaturedInfo>
          <FeaturedDescription>{item.overview}</FeaturedDescription>
          <FeaturedButtonsContainer>
            <FeaturedButtons watch href={`/watch/${item.id}`}>►	Assistir</FeaturedButtons>
            <FeaturedButtons list href={`/list/add/${item.id}`}>+ Minha Lista</FeaturedButtons>
          </FeaturedButtonsContainer>
          <FeaturedGenres><strong>Generos: </strong>{item.genres.map(el => el.name).join(', ')}</FeaturedGenres>
        </Fade>
      </Fade>
    </FeaturedContainer>
  );
}

export default FeaturedMovie;
