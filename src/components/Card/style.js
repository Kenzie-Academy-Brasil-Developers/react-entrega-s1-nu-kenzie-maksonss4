import styled, {css} from "styled-components";

export const Container = styled.li`
    ${
        ({type}) => type === 'Entrada' 
        ? css`border-left: 2px solid #03B898;` 
        : css`border-left: 2px solid red;`
    }

    padding: 5px;
    border-radius: 3px 10px 10px 3px;
    display: flex;
    gap: 5px;
    background-color: #E9ECEF;

    h3{
        margin: 0;
        &:hover{
            color: black;
        }
    }

    p{
        margin: 0;
    }
`