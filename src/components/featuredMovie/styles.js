import styled, { css } from 'styled-components'

import size from '../../variables';

export const FeaturedContainer = styled.section`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(https://image.tmdb.org/t/p/${size.original}${({ item }) => item.backdrop_path});
`;

export const Fade = styled.div`
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

export const Featured = styled.div`
  display: inline-block;
  margin-right: 15px;
  `;

  export const FeaturedName = styled.div`
  font-size: 60px;
  font-weight: bold;
`;

export const FeaturedInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
`;

export const FeaturedPoints = styled(Featured)`
  color: #46d369;
`;

export const FeaturedDescription = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  max-width: 40%;
`;

export const FeaturedButtonsContainer = styled.div`
  margin-top: 15px;
`;

export const FeaturedGenres = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: #999;
`;

export const FeaturedButtons = styled.a`
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