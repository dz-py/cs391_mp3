import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
  width: 30%;
  background-color: #f5f6fa;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  list-style: none;
  padding-left: 0;
`;

const StyledLi = styled.li`
  background-color: #3498db;
  padding: 2vh 0;
  margin: 2vh auto;
  width: 90%;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
  font-size: calc(2px + 2vw);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export default function Nav() {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi><StyledLink to="/">Home</StyledLink></StyledLi>
        <StyledLi><StyledLink to="/education">Education</StyledLink></StyledLi>
        <StyledLi><StyledLink to="/experience">Experience</StyledLink></StyledLi>
        <StyledLi><StyledLink to="/achievements">Achievements</StyledLink></StyledLi>
        <StyledLi><StyledLink to="/skills">Skills</StyledLink></StyledLi>
        <StyledLi><StyledLink to="/projects">Projects</StyledLink></StyledLi>
      </StyledUl>
    </StyledNav>
  );
}