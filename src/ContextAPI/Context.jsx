import { createContext, useState } from "react";
import { currentDay, dateFormat } from "../utils/DateFormat";
import { toast, Bounce } from "react-toastify";


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
        toast.success(`You success to ${text} contact! `, {
            position: "top-center",
            autoClose: 100,
            hideProgressBar: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        })

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