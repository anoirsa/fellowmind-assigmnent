import styled, { createGlobalStyle } from "styled-components/macro";


export const AppParentContainer = styled.div`
  min-width: 350px;
  width: 100%;
  overflow: hidden;
`;

export const GlobalStyled =  createGlobalStyle`
* {
    font-family: "Lato", monospace;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
`;