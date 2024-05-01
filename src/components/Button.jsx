import React, {useState} from "react";

const StateComponent = () => {

    const [countClicks, setCountClicks] = useState(1);
    const handleOnClick = () => {
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

