import styled from "styled-components/macro";
import { customCenter } from "../../globals/Variables";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  ${customCenter}
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${customCenter}
  flex-direction: column;
  justify-content: flex-start;
`;

export const Header = styled.div`
    height: 4.5rem;
    width: 100%;
    background: #fc0;
    ${customCenter}
    justify-content: flex-start;

    & > h4 {
        font-weight: 400;
        font-size: 1.1rem;
        
    }
`;

export const BackArrow = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.6rem;
    margin-left: 0.6rem;
    transform: translateY(2px);
    transition:all 300ms ease-out;
    &:hover {
        opacity: 0.6;
        transform: scale(1.2);
    }
`;

export const ItemRow = styled.div`
    height: 4.5rem;
    width: 100%;
    ${customCenter}
    position: relative;
    justify-content: flex-start;
    & > h4 {
        font-weight: 400;
        font-size: 0.8rem;      
    }
    & > figure {
        width: 70px;
        margin-right: 1rem;
    }
    border-bottom: 1px solid #b4b4b49e;
`;

export const ImageRow = styled.img`
    margin-left: 20px;
`;
export const ImageDown = styled.img`
     width: 1.8rem;
    height: 1.8rem;
    position: absolute;
    transform: ${({scrolled}) => scrolled ? 'rotate(90deg)' : 'rotate(270deg)'};
    transition:all 300ms ease-out;
    &:hover {
        opacity: 0.6;
    }
    right: 8px;

`;

export const Participants = styled.div`
    width: 100%;
    height: ${({scrolled}) => scrolled ? 'auto' : '0'};
    transition:all 400ms ease-out;
    overflow: hidden;
    ${customCenter}
    flex-direction: column;
    border-bottom: ${({scrolled}) => scrolled && '1px solid #b4b4b49e'}

`;

export const Participant = styled.div`
    height: 50px;
    width: 160px;
    margin-top: 10px;
    margin-bottom: 10px;
    gap: 12px;
   // background: red;
    ${customCenter}
    & > .avatar {
        width: 40%;
        height:100%;
        border-radius: 50%;
        background: #d1cdcd;
    }
    & > .name--job {
        width: 80%;
        height:100%;
        ${customCenter}
        flex-direction: column;
        align-items: flex-start;
        & > h4 {
            font-size: 11px;
            font-weight: 400;
        }
        & > h6 {
            font-size: 9px;
            color: #9e9e9e;
            font-weight: 400;
            margin-top: 4px;
        }
    }
`;

export const DescriptionTextContainer = styled.div`
    width: 100%;
    & > .wrapper {
        margin-left: 90px;
        margin-top: 20px;
        font-size: 14px;
        color:#9e9e9e;
        & > p {
            font-weight: 300;
        }
    }
`;


