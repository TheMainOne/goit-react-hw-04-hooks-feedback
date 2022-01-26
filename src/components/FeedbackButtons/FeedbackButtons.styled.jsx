import styled from "styled-components";

export const Button = styled.button`
  border-radius: 7px;
  padding: 10px 20px;
  border: none;
  background: blanchedalmond;
  margin-right: 10px;
  cursor: pointer;
  font-family: Sans-Serif;
  font-size: 18px;

  transition: transform 250ms linear;

  &:hover {
      transform: translateY(-20%);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
