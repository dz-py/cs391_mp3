import styled from 'styled-components';

const StyledMain = styled.main`
  width: 70%;
  background-color: #ffffff;
  padding: 2vh 2vw;
`;

export default function Main({ children }: { children: React.ReactNode }) {
  return <StyledMain>{children}</StyledMain>;
}