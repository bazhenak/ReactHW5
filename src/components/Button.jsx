import React, {useState} from "react";

const StateComponent = () => {

    const [countClicks, setCountClicks] = useState(1);
    const handleOnClick = () => {
        setCountClicks(countClicks + 1)
    }

    const styles = {
        background: countClicks % 2 ? '#C8E7EF' : 'darkslategrey',
    }

    function changeBackground(event) {
        event.target.style.background = 'blue';
    }
    function changeBackgroundBack(event) {
        event.target.style.background = '';
    }



    document.body.style.background = countClicks % 3 ? 'darkseagreen' : '#7FB5B5'
    return (
        <div>
            <button className={'btn'} style={styles} onClick={handleOnClick} onMouseOver={changeBackground} onMouseLeave={changeBackgroundBack}>Click</button>
        </div>
    )
};

export default StateComponent;

