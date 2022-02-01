import React from 'react'
import { MainPageContainer, 
    MeetingCover,
     SubSection,
    ImageBackground,
    CurrentMeeting, 
    WrapperMetting,
    NextMeetings} from './MainSC'
import BackSource from '../images/bg-image.jpg'

const Main = () => {
    return (
        <MainPageContainer>
          <MeetingCover>
             <ImageBackground src={BackSource} />
            <CurrentMeeting>
                <WrapperMetting>
                    <h4 className="title">CURRENT MEETING</h4>
                    <div className="white--line"></div>
                    <h3 className="meeting--title">ECRAFT MANAGEMENT MONTHLY MEETING</h3>
                </WrapperMetting>

            </CurrentMeeting>
            <NextMeetings>

            </NextMeetings>

          </MeetingCover>
          <SubSection>

          </SubSection>
            
        </MainPageContainer>
    )
}

export default Main
