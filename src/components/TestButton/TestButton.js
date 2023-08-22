import { useState } from 'react';
const TestButton = () => {
    const [number, setNumber] = useState('10');

    const handleClick = () => {
        setNumber(number-1);
    }
    return ( <div>
        <h2>{number}</h2>
        <button onClick={handleClick}>Test Button</button>
    </div>
    )
};
export default TestButton;