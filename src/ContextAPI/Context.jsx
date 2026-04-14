import { createContext } from "react";


const Context = createContext();
export { Context };


const friendsDataFetch = async () =>{
    const res = await fetch("/friends.json");
    return res.json();
}

const ContextProvider = ({ children }) => {
const friendsPromise = friendsDataFetch()

    const data = {
     friendsPromise
    }
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
};

export default ContextProvider;