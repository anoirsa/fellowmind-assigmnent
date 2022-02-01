import styled from "styled-components/macro";
import { customCenter } from "../globals/Variables";

export const MainPageContainer = styled.div`
    width: 100%;
    min-height:100vh;
    display: flex;
`;

export const MeetingCover = styled.div`
    flex: 2.5;
    position: relative;
    min-height: 600px;
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

`;

export const NextMeetings = styled.div`
    flex: 0.7;
    width: 100%;
    background: #201f1f81;
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
  //  background:red;
`;  