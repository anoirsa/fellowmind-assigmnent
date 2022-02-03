import styled from "styled-components/macro";
import { customCenter, yellow } from "../../globals/Variables";



// Styled-components file

export const Container = styled.div`
  width: 100%;
  height: 100%;
  ${customCenter}
  @media screen and (max-width: 700px) {
        margin-top: 20px;
    }
`;

export const Wrapper = styled.div`
  width: 93%;
  height: 98%;
  ${customCenter}
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  & > .c--room {
    font-weight: 400;
    color: #9e9e9e;
    margin-bottom: 3px;
  }
`;

export const TimelineBox = styled.div`
  width: 100%;
  ${customCenter}
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 13px;
`;

export const HalfHourBox = styled.div`
  width: 100%;
  height: 50px;
  ${customCenter}
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  & > h6 {
    font-size: 12px;
    width: 10%;
    font-weight: 400;
    z-index: 2;
  }

  & > .line--time {
    width: 90%;
    height: 1px;
    border-top: 0.1px solid #d1c8c8c1;
    transform: translateY(8px);
  }
`;

export const MeetingTimeBox = styled.div`
  position: absolute;
  top: 5px;
  right: 0;
  width: 90%;
  height: 90px;
  z-index: 2;
  background: #fff;
  border: 0.3px solid #e4dcdc;
  border-radius: 3px;
  -webkit-box-shadow: -2px 1px 6px -3px rgba(0, 0, 0, 0.33);
  box-shadow: -2px 1px 6px -3px rgba(0, 0, 0, 0.33);
  ${customCenter}
  transition: all 350ms ease-out;
  cursor: pointer;
  &:hover {
    background: #b1aeae;
    .information--section {
      color: #fff;
      & > h6 {
        color: #fff;
      }
    }
  }

  & > .yellow--section {
    width: 8px;
    background: ${yellow};
    height: 100%;
  }
  & > .information--section {
    height: 100%;
    width: calc(100% - 8px);
    ${customCenter}
    flex-direction: column;
    align-items: flex-start;
    & > h4 {
      margin-left: 13px;
      margin-bottom: 5px;
      font-weight: 400;
      font-size: 0.9rem;

    }
    & > h6 {
      margin-left: 13px;
      font-weight: 400;
      color: #9e9e9e;
    }
  }
  @media screen and (max-width: 1000px) {
        width: 80%;
    }
    @media screen and (max-width: 700px) {
        width: 90%;
    }
`;
