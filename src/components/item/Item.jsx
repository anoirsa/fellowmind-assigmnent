import React , {useState} from 'react';
import { BackArrow, 
    Container, 
    Header,
     Wrapper,
      ItemRow, 
      ImageRow, 
      ImageDown, 
      Participants,
      Participant ,
      DescriptionTextContainer} from './ItemSH';
import ArrowLeft from '../../images/svgs/backarrow.svg';
import Down from '../../images/svgs/down.svg';
import Time from '../../images/icons/time.png';
import Person from '../../images/icons/person.png';
import Description from '../../images/icons/description.png';





const Item = ({displayedMeeting,toTimeLine}) => {
    const [scrolled, setScrolled] = useState(false);
    return (
        <Container>
            <Wrapper>
                <Header>
                    <BackArrow src={ArrowLeft} onClick={() => toTimeLine()} />
                    <h4>{displayedMeeting.Subject}</h4>
                </Header>
                <ItemRow>
                    <figure>
                    <ImageRow  src={Time}/>
                    </figure>
                    
                    <h4>{displayedMeeting.MeetingDate}</h4>
                </ItemRow>
                <ItemRow>
                    <figure>
                    <ImageRow  src={Time}/>
                    </figure>
                    
                    <h4>{displayedMeeting.StartTime} TO {displayedMeeting.EndTime}</h4>
                </ItemRow>
                <ItemRow>
                    <figure>
                    <ImageRow  src={Person}/>
                    </figure>
                    
                    <h4>PARTICIPANTS</h4>
                    <ImageDown  src={Down} scrolled={scrolled} onClick={() => setScrolled(!scrolled)} />
                </ItemRow>
                <Participants scrolled={scrolled}>
                    { displayedMeeting.Participants ?
                    <div>
                        {displayedMeeting.Participants.map(({Name, Title}, index) => {

                            return (
                                <Participant key={index}>
                                <div className="avatar" />

                    
                                <div className="name--job">
                                    <h4>{Name}</h4>
                                    <h6>{Title}</h6>
                                </div>
                        </Participant>
                            )
                        })}
                    
                        </div> : <div className="no--participants"> 
                                <h6>No participant yet in the meeting</h6>       
                        </div> }
                       
                </Participants>
                <ItemRow>
                    <figure>
                    <ImageRow  src={Description}/>
                    </figure>
                    
                    <h4>DESCRIPTION</h4>
                </ItemRow>
                <DescriptionTextContainer>
                    <div className="wrapper">
                        <p>
                            "No description property in the JSON file "
                        </p>
                    </div>
                </DescriptionTextContainer>

            </Wrapper>
        </Container>
    )
}


export default Item
