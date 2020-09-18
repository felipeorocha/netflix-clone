import React from 'react';

import { HeaderContainer, Header as HeaderComponent } from './styles';

const Header = ({ hasBackground }) => {

  return (
    <HeaderContainer hasBackground={hasBackground}>
      <HeaderComponent logo>
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix"/>
        </a>
      </HeaderComponent>
      <HeaderComponent user>
        <a href="/">
          <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="user_avatar"/>
        </a>
      </HeaderComponent>
    </HeaderContainer>
  );
}

export default Header;
