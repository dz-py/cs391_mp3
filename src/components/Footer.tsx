import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #2c3e50;
  color: #ffffff;
  padding: 1vh 1vw;
  text-align: center;
  font-size: calc(1px + 1vw);
`;

export default function Footer() {
  return (
    <StyledFooter>
      All Rights Reserved by Decheng Zheng <a href="/credits">Credits</a> &copy;
    </StyledFooter>
  );
}