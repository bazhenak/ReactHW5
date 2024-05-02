import React, {useState} from "react";

const StateComponent = () => {

    const [countClicks, setCountClicks] = useState(1);
    const handleOnClick = () => {
        setCountClicks(countClicks + 1)
    }

    const styles = {
        background: countClicks % 2 ? 'GreenYellow' : 'LightGreen',
    }

    function changeBackground(event) {
        event.target.style.background = 'blue';
    }

    document.body.style.background = countClicks % 3 ? '#CD853F' : '#8B4513'
    return (
        <div>
            <button className={'btn'} style={styles} onClick={handleOnClick} onMouseOver={changeBackground}>Click</button>
        </div>
    )
};

export default StateComponent;

