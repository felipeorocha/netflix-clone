import React from 'react';
import styled, { css } from 'styled-components';

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

    ${props => props.vertical ? css`
      background: linear-gradient(to top, #111 10%, transparent 90%);
     ` : props.horizontal ? css`
      background: linear-gradient(to right, #111 30%, transparent 70%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 30px;
      padding-bottom: 150px;
      padding-top: 70px;
     ` : ''};
  `;

  const Featured = styled.div`
    display: inline-block;
    margin-right: 15px;
  `;

  const FeaturedName = styled.div`
    font-size: 60px;
    font-weight: bold;
  `;

  const FeaturedInfo = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;
  `;

  const FeaturedPoints = styled(Featured)`
    color: #46d369;
  `;

  const FeaturedDescription = styled.div`
    margin-top: 15px;
    font-size: 20px;
    color: #999;
    max-width: 40%;
  `;

  const FeaturedButtonsContainer = styled.div`
    margin-top: 15px;
  `;

  const FeaturedGenres = styled.div`
    margin-top: 15px;
    font-size: 18px;
    color: #999;
  `;

  const FeaturedButtons = styled.a`
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;

    &:hover {
      opacity: 0.7;
      transition: all ease 0.2s;
    }

    ${props => props.watch ? css`
      background-color: #FFF;
      color: #000;
    ` : props.list ? css`
      background-color: #333;
      color: #FFF;
    ` : ''};
  `;

  const onAirAt = new Date(item.first_air_date);

  return (
    <FeaturedContainer>
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
