import React from 'react';
import styled, { css } from 'styled-components'

import size from '../variables';

const FeaturedMovie = ({ item }) => {
  const Featured = styled.section`
    /* ${props => props.main && css`
      margin-bottom: 30px;
    `} */

    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: url(https://image.tmdb.org/t/p/${size.original}${item.backdrop_path});

    /* ${props => props.item && css`
      display: inline-block;
      width: 250px;

      & img {
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.3s;
        cursor: pointer;
      }

      & img:hover {
        transform: scale(1);
      }
    `} */
  `;

  return (
    <Featured>
      <div>{item.original_name}</div>
    </Featured>
  );
}

export default FeaturedMovie;
