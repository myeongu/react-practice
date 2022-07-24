import React from "react";
import ErrorBoundary from 'ErrorBoundary';

class Message extends React.Component {
    render() {
        throw new Error("에러 발생!");
        return "Message Component";
    }
}


class App2 extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <Message />
            </ErrorBoundary>
        )
    }
}


export default App2;