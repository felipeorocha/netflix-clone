import styled, { css } from 'styled-components';

export const MoviewRow = styled.div`
  ${props => props.main && css`
    margin-bottom: 30px;

    &:hover ${Navigator} {
      opacity: 1;
    }
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
  height: 375px;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.3s;

  & svg {
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.6);
  }

  ${props => props.next && css`
    right: 5px;
  `}

  ${props => props.previous && css`
    left: 5px;
  `}

  & svg:hover {
    font-size: 2.5rem;
    transition: all ease 0.2s;
  }
`;

export const Title = styled.h2`
  margin: 0 0 0 30px;
`;

