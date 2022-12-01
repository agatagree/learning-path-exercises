import { NavLink } from "react-router-dom";
import  styled  from 'styled-components'

export const Menu = () => {
    return (
        <StyledMenu>
            <NavItem to='/'>Home</NavItem>
            <NavItem to='/projects'>Projects</NavItem>
            <NavItem to='/about'>About</NavItem>
            <NavItem to='/contact'>Contact</NavItem>
        </StyledMenu>
    )
}

const StyledMenu = styled.div`
  display: flex;
  margin: 10px 0;
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  padding: 5px 20px;
  margin-right: 20px;
  font-weight: 300;
  color: black;
  &.active {
    font-weight:800;
  }
  `;
