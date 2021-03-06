import styled from 'styled-components';

export const ListsContainer = styled.section`
  margin-top: -150px;
`;

export const Footer = styled.footer`
  margin: 30px 0;
  color: #999;
  text-align: center;
  bottom: 0;
  left: 0;
  right: 0;
  position: ${({loader}) => loader ? "absolute" : "relative"};
`;
