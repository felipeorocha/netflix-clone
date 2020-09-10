import React from 'react';
import styled, { css } from 'styled-components'

import size from '../variables';

const CategoriesList = ({ key, title, items }) => {
  const MoviewRow = styled.div`
    ${props => props.main && css`
      margin-bottom: 30px;
    `}

    ${props => props.listarea && css`
      overflow-x: hidden;
      padding-left: 30px;
    `}

    ${props => props.item && css`
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
    `}

    ${props => props.list && css`
      width: 99999999px;
    `}
  `;

  const Title = styled.h2`
    margin: 0 0 0 30px;
  `;

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
