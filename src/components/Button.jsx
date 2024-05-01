import React, {useState} from "react";
import {hover} from "@testing-library/user-event/dist/hover";

const StateComponent = () => {

    const [countClicks, setCountClicks] = useState(1);
    const handleOnClick = (event) => {
        setCountClicks(countClicks + 1)
    }

    const styles = {
        background: countClicks % 2 ? 'white' : 'black',
    }

    document.body.style.background = countClicks % 3 ? 'red' : 'blue'
    return (
        <div>
            <button className={'btn'} style={styles} onClick={handleOnClick}>Click</button>
        </div>
    )
};

export default StateComponent;

