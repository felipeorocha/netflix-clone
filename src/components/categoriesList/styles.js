import styled, { css } from 'styled-components';

export const MoviewRow = styled.div`
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

export const Navigator = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  ${props => props.next && css`

  `}

  ${props => props.previous && css`

  `}
`;

export const Title = styled.h2`
  margin: 0 0 0 30px;
`;

