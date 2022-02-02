import styled from "styled-components/macro";
import { customCenter } from "../globals/Variables";

export const MainPageContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100vh;
`;

export const MeetingCover = styled.div`
    flex: 2.5;
    position: relative;
    display: flex;
    flex-direction: column;
    
`;

export const CurrentMeeting = styled.div`
    flex: 3;
    width: 100%;
    ${customCenter}
`;

export const WrapperMetting = styled.div`
    width: 90%;
    ${customCenter}
    flex-direction: column;
    color:#ffff;

    & > .title {
        font-weight: 300;
        margin-bottom:20px;
        font-size: 1.2rem;
    }
    & > .white--line {
        width:30px;
        border-top: 1.2px solid #fff;
    }
    & > .meeting--title {
        font-weight: 600;
        font-size: 2.5em;
        text-align: center;
        margin-top:20px
    } 

    & > .arranger {
        font-weight: 300;
        margin-top: 20px;
    }

`;

export const MeetingPrgress = styled.div`
    ${customCenter}
    margin-top: 20px;
    width: 400px;
    color:#fff;
    gap: 10px;
    & > h5 {
        font-size:1.3rem;
        font-weight: 300;
    }
    & > .progess--line {
        width: 60%;
        height: 7px;
        background-color:#474444c1;
        border-radius:50px;
        ${customCenter}
        justify-content: flex-start;
        & > .current--progress {
            width: 30%;
            height: 100%;
            background: #fc0;
            border-radius:50px;
        }

    }
    
`;

//
export const NextMeetings = styled.div`
    flex: 0.7;
    width: 100%;
    background: #201f1f81;
    ${customCenter}
    justify-content:flex-start;
    border-top: 1px solid #3a3737a6;

    `;

export const NextMeetingBox = styled.div`
    margin-left: 2rem;
    ${customCenter}
    flex-direction: column;
    align-items: flex-start;
    gap:4px;
    color: #ffff;
    & > h5 {
        margin-bottom: 5px;
        color: #8a8787;
        font-weight: 300;
    }
    & > h4 {
        margin-bottom:3px;
        font-weight: 400;
    }
`;


export const ImageBackground = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;

`;
export const SubSection = styled.div`
    flex: 1.2;
`;  
