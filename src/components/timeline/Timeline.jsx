import React from "react";
import { getTimeTable } from "../../globals/Functions";
import {
  Container,
  Wrapper,
  TimelineBox,
  HalfHourBox,
  MeetingTimeBox,
} from "./TimelineSH";

const Timeline = ({data, toTimeLine, meetingInto}) => {
  return (
    <Container>
      <Wrapper>
        <h5 className="c--room">CONFERENCE ROOM</h5>
        <h3>KESÄ TODAY</h3>
        <TimelineBox>
          {getTimeTable().map((value, index) => {
            let meetingOnTime = null;
            data.forEach((item) => {
                if(item.StartTime === value) {
                    meetingOnTime = item
                }
            })
            return (
              <HalfHourBox key={index}>
                { meetingOnTime && (
                  <MeetingTimeBox onClick={() => meetingInto({displayedMeeting : meetingOnTime})}>
                    <div className="yellow--section" />
                    <div className="information--section">
                        <h4>{meetingOnTime.Subject}</h4>
                        <h6>{meetingOnTime.Organizer.toUpperCase()}</h6>
                    </div>
                  </MeetingTimeBox>
                )}
                <h6>{value}</h6>
                <div className="line--time" />
              </HalfHourBox>
            );
          })}
        </TimelineBox>
      </Wrapper>
    </Container>
  );
};

export default Timeline;
