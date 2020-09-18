import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  transition: all ease 0.8s;
  background: ${({hasBackground}) => hasBackground ? "#141414" : "transparent"};
`;

export const Header = styled.div`
  ${props => props.logo ? css`
    height: 25px;

    & img {
      height: 100%;
    }
  ` : props.user ? css`
    height: 35px;

    & img {
      height: 100%;
      border-radius: 3px;
    }
  ` : ''};
`;
