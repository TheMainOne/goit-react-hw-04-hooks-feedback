import styled from "styled-components";

export const ListStyled = styled.ul`
display: flex;
justify-content: center;
list-style: none;
margin: 0;
padding: 0;
font-size: 18px;
`;

export const ListItem = styled.li`
display: flex;
padding: 10px;
background-color: blanchedalmond;
border-radius: 7px;
cursor: pointer;

&:not(:last-of-type) {
    margin-right: 10px;
}

transition: background-color 200ms linear, transform 200ms linear;

&:hover {
    background-color: burlywood;
    transform: scale(1.05);
}
`;