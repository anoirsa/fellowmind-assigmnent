import React from "react";
import {
  MainPageContainer,
  MeetingCover,
  SubSection,
  ImageBackground,
  CurrentMeeting,
  WrapperMetting,
  MeetingPrgress,
  NextMeetings,
  NextMeetingBox,
} from "./MainSC";
import BackSource from "../images/bg-image.jpg";
import { useApp } from "../context/DataContext";
import Timeline from "../components/timeline/Timeline";
import Item from "../components/item/Item";

const Main = () => {
  const { meetings, data, meetingInto, toTimeLine } = useApp();
  const { currentMeeting, nextMeetings, displayedMeeting } = meetings;
  return (
    <MainPageContainer>
      <MeetingCover>
        <ImageBackground src={BackSource} />
        <CurrentMeeting>
          <WrapperMetting>
            <h6 className="copy--rights">Made by software developer <span>Anouar Belila</span></h6>
            <h4 className="title">CURRENT MEETING</h4>
            <div className="white--line"></div>
            <h3 className="meeting--title">
              {currentMeeting.Subject.toUpperCase()}
            </h3>
            <MeetingPrgress>
              <h5>{currentMeeting.StartTime}</h5>
              <div className="progess--line">
                <div className="current--progress"></div>
              </div>
              <h5>{currentMeeting.EndTime}</h5>
            </MeetingPrgress>
            <h4 className="arranger">
              {currentMeeting.Organizer.toUpperCase()}
            </h4>
          </WrapperMetting>
        </CurrentMeeting>
        <NextMeetings>
          {nextMeetings.map((value, index) => {
            return (
              <NextMeetingBox key={index}>
                <h5>
                  {value.StartTime}-{value.EndTime}
                </h5>
                <h4>{value.Subject}</h4>
                <h5>{value.Organizer.toUpperCase()}</h5>
              </NextMeetingBox>
            );
          })}
        </NextMeetings>
      </MeetingCover>
      <SubSection>
        {displayedMeeting ? <Item 
           displayedMeeting={displayedMeeting}
           toTimeLine={toTimeLine}
        /> :
           <Timeline
           data={data}
           meetingInto={meetingInto}
         />
        }
       
      </SubSection>
    </MainPageContainer>
  );
};

export default Main;
