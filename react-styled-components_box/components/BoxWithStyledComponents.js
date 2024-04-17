import styled, { css } from "styled-components";

export default styled.button`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;

  ${(props) =>
    props.$variant === "black" &&
    css`
      background-color: black;
    `}

  &:hover {
    background-color: hotpink;
  }
`;

function StyledBox() {
  return <div></div>;
}
