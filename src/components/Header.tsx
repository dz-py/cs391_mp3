import styled from 'styled-components';


const StyledHeader = styled.header`
display: flex;
flex-direction: column;
padding: 1vh 1vw;
background-color: #2c3e50; 
color: #ecf0f1; 
justify-content: space-evenly;
font-size: calc(1px + 1vw);
`


export default function Header() {
    return (
        <StyledHeader>
            <h1>Decheng Zheng</h1>
            <h5>My Online Resume</h5>
        </StyledHeader>
    )
}