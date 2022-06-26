import React from "react";

const Clock = (props) =>  {
    return (
        <div>
            <h1>Hi React~</h1>
            <h2>현제 시간 : { new Date().toLocaleDateString() } { new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;