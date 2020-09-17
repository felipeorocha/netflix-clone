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

  const VerticalFade = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
  `;

  const HorizontalFade = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
  `;

  const FeaturedName = styled.div`

  `;

  const FeaturedInfo = styled.div`

  `;

  const FeaturedPoints = styled.div`

  `;

  const FeaturedYear = styled.div`

  `;

  const FeaturedSeasons = styled.div`

  `;

  const FeaturedDescription = styled.div`

  `;

  const FeaturedButtons = styled.div`

  `;

  const FeaturedGenres = styled.div`

  `;

  const onAirAt = new Date(item.first_air_date);

  return (
    <FeaturedContainer>
      <VerticalFade>
        <HorizontalFade>
          <FeaturedName>{item.original_name}</FeaturedName>
          <FeaturedInfo>
            <FeaturedPoints>{item.vote_average} pontos</FeaturedPoints>
            <FeaturedYear>{onAirAt.getFullYear()}</FeaturedYear>
            <FeaturedSeasons>{item.number_of_seasons} temporada{ item.number_of_seasons > 1 ? 's' : '' }</FeaturedSeasons>
          </FeaturedInfo>
          <FeaturedDescription>{item.overview}</FeaturedDescription>
          <FeaturedButtons></FeaturedButtons>
          <FeaturedGenres><strong>Generos: </strong>{item.genres.map(el => el.name).join(', ')}</FeaturedGenres>
        </HorizontalFade>
      </VerticalFade>
    </FeaturedContainer>
  );
}

export default FeaturedMovie;
