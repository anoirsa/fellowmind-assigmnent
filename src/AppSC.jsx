import styled, { createGlobalStyle } from "styled-components/macro";


export const AppParentContainer = styled.div`
  min-width: 500px;
  width: 100%;
`;

export const GlobalStyled =  createGlobalStyle`
* {
    font-family: "Lato", monospace;
    margin: 0;
    padding: 0;
  }
  
`;