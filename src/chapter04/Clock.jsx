import React from "react";

const Clock = (props) =>  {

    const Dateclock = () => {
        let clock = new Date().toLocaleDateString() + " - " + new Date().toLocaleTimeString();
        return clock;
    };

    return (
        <div>
            <h1>Hi React~</h1>
            <h2>현제 시간 : { Dateclock() }</h2>
        </div>
    );
}

export default Clock;