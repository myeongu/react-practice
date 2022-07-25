import React, { createContext, useContext } from "react";

const MessageContext = createContext();

const App = () => (
    <MessageContext.Provider value="Provider Value">
        <Level2Wrapper message="Context API in React" />
    </MessageContext.Provider>
)

const Level2Wrapper = () => {
    const message = useContext(MessageContext);
    return (
    <div>
        <Level2 message={message} />
    </div>
    )
}


const Level2 = ({ message }) => (<div>Level2: {message}</div>);

export default App;