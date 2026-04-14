import { createContext } from "react";


const Context = createContext();
export { Context };

const ContextProvider = ({ children }) => {


    const data = {
    }
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
};

export default ContextProvider;