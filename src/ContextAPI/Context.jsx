import { createContext, useState } from "react";
import { currentDay, dateFormat } from "../utils/DateFormat";


const Context = createContext();
export { Context };

const ContextProvider = ({ children }) => {
    const [timeline, setTimeline] = useState([]);
    const [filteredTimeline, setFilteredTimeline] = useState([]);

    const handleTimelineUpdate = (id, text) => {
        const newEntry = {
            id: Date.now(),
            friendId: id,
            type: text,
            timestamp: currentDay() + ", " + dateFormat(new Date().toISOString())
        };

        setTimeline(prev => [newEntry, ...prev]);
    }



    const data = {
        timeline,
        setTimeline,
        filteredTimeline,
        setFilteredTimeline,
        handleTimelineUpdate
    }
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
};

export default ContextProvider;