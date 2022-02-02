import React, { useContext, useState, useEffect } from "react";
import { reformDate } from "../globals/Functions";
import meetingsData from "./meetings.json";

const Context = React.createContext();

const useApp = () => useContext(Context);

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [meetings, setMeeting] = useState({
    currentMeeting: {},
    nextMeetings: [],
    displayedMeeting: null
  });
  const [loading, setLoading] = useState(true);
  const meetingInto = ({displayedMeeting}) => {
    setMeeting({...meetings, displayedMeeting})
  }
  const toTimeLine = () => {
    setMeeting({...meetings, displayedMeeting: null})
  }
  useEffect(() => {
    let converted = meetingsData.map((value) => {
      const startConverted = new Date(value.StartTime);
      const endConvereted = new Date(value.EndTime);
      return {
        ...value,
        StartTime:
          startConverted.getHours() + ":" + startConverted.getMinutes(),
        EndTime: endConvereted.getHours() + ":" + endConvereted.getMinutes(),
        MeetingDate: reformDate(startConverted)
      };
    });
    setData(converted);
    setMeeting({
      ...meetings,
      currentMeeting: converted[0],
      nextMeetings: [...converted].splice(1),
    });
    setLoading(false);
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Context.Provider value={{meetings, data, meetingInto, toTimeLine}}>
      {!loading && children}
    </Context.Provider>
  );
};

export { useApp, Provider };
