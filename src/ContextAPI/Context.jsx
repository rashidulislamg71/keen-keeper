import { createContext, useState } from "react";
import { currentDay, dateFormat } from "../utils/DateFormat";


const Context = createContext();
export { Context };

const ContextProvider = ({ children }) => {
    const [timeline, setTimeline] = useState([]);
    const [filterTimeline, setFilterTimeline] = useState("all");

    const handleTimelineUpdate = (id, text) => {
        const newEntry = {
            id: Date.now(),
            friendId: id,
            type: text,
            timestamp: currentDay() + ", " + dateFormat(new Date().toISOString())
        };

        setTimeline(prev => [newEntry, ...prev]);
    }


  const handleTimelineFilter = (type) => {
    setFilterTimeline(type);
};





    const data = {
        timeline,
        setTimeline,
        filterTimeline,
        setFilterTimeline,
        handleTimelineUpdate,
        handleTimelineFilter
    }
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
};

export default ContextProvider;