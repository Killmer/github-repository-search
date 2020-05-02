import styled from 'styled-components';

export const StyledRepositoryDetails = styled.li`
border: #87ceeb solid 6px;
background-color: #1c1c1c;
color: white;
border-radius: 8px;
box-sizing: border-box;
list-style-type: none;
margin: 0 auto;
padding: 15px 20px;
width: 100%;
text-align: center;
word-break: break-word;
  a {
    text-decoration: none;
    color: #87ceeb;
  }
  h2 {
    font-family: 'Abel', sans-serif;
    font-size: 42px;s

    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
  }
`;
