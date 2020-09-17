import React from 'react';
import styled, { css } from 'styled-components'

import size from '../variables';

const FeaturedMovie = ({ item }) => {

  const FeaturedContainer = styled.section`
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: url(https://image.tmdb.org/t/p/${size.original}${item.backdrop_path});
  `;

  const Fade = styled.div`
    width: inherit;
    height: inherit;

    background: ${props => props.vertical ? css`
      linear-gradient(to top, #111 10%, transparent 90%);
     ` : props.horizontal ? css`
      linear-gradient(to right, #111 30%, transparent 70%);
     ` : ''}
  ;`

  const FeaturedName = styled.div`
    font-size: 60px;
    font-weight: bold;
  `;

  const FeaturedInfo = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;
  `;

  const FeaturedPoints = styled.div`
    display: inline-block;
    color: #46d369;
    margin-right: 15px;
  `;

  const FeaturedYear = styled.div`
    display: inline-block;
    margin-right: 15px;
  `;

  const FeaturedSeasons = styled.div`
    display: inline-block;
    margin-right: 15px;
  `;

  const FeaturedDescription = styled.div`

  `;

  const FeaturedButtonsContainer = styled.div`

  `;

  const FeaturedGenres = styled.div`

  `;

  const FeaturedButtons = styled.a`

  `;

  const onAirAt = new Date(item.first_air_date);

  return (
    <FeaturedContainer>
      <Fade vertical>
        <Fade horizontal>
          <FeaturedName>{item.original_name}</FeaturedName>
          <FeaturedInfo>
            <FeaturedPoints>{item.vote_average} pontos</FeaturedPoints>
            <FeaturedYear>{onAirAt.getFullYear()}</FeaturedYear>
            <FeaturedSeasons>{item.number_of_seasons} temporada{ item.number_of_seasons > 1 ? 's' : '' }</FeaturedSeasons>
          </FeaturedInfo>
          <FeaturedDescription>{item.overview}</FeaturedDescription>
          <FeaturedButtonsContainer>
            <FeaturedButtons href={`/watch/${item.id}`}>►	Assistir</FeaturedButtons>
            <FeaturedButtons href={`/list/add/${item.id}`}>+ Minha Lista</FeaturedButtons>
          </FeaturedButtonsContainer>
          <FeaturedGenres><strong>Generos: </strong>{item.genres.map(el => el.name).join(', ')}</FeaturedGenres>
        </Fade>
      </Fade>
    </FeaturedContainer>
  );
}

export default FeaturedMovie;
