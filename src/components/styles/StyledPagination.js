import styled from 'styled-components';

export const StyledPagination = styled.div`
color: white;
box-sizing: border-box;
margin: 0 auto;
padding: 15px 20px;
width: 100%;
text-align: center;

button {
  height: 30px;
  width: 60px;
  border-radius: 8px;
  margin: 5px;
  color: white;
  font-size: 16px;
  border: 2px #87ceeb solid;
  background-color: #1c1c1c;
  outline: none;

  &:hover:not(:disabled) {
    cursor: pointer;
    background-color: #87ceeb
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
}
`;
