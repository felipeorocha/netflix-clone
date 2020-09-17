import React from 'react';
import styled, { css } from 'styled-components'

const Header = ({ hasBackground }) => {

  const HeaderContainer = styled.header`
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
    transition: all ease 0.5s;
    background: ${hasBackground ? "#141414" : "transparent"};
  `;

  const Header = styled.div`
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

  return (
    <HeaderContainer hasBackground>
      <Header logo>
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix"/>
        </a>
      </Header>
      <Header user>
        <a href="/">
          <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="user_avatar"/>
        </a>
      </Header>
    </HeaderContainer>
  );
}

export default Header;
