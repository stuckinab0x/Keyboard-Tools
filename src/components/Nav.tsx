import { FC } from 'react';
import styled from 'styled-components';

const NavMain = styled.div`
  display: flex;
  background-color: rgb(61, 61, 61);
  width: 100%;

  > h1 {
    margin: 20px 20px;
    color: white;
  }
`;

const Nav: FC = () => (
  <NavMain>
    <h1>Scale Memory Exercise</h1>
  </NavMain>
);

export default Nav;
