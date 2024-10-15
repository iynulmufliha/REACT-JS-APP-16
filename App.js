import React, { useState } from 'react';

function App() {
    const [input, setInput] = useState('');
    const [element, setElement] = useState('');
    const [frequency, setFrequency] = useState(0);

    const countFrequency = () => {
        const array = input.split(',');
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] === element) {
                count++;
            }
        }
        setFrequency(count);
    };

    return (
        <div>
            <h1>Element Frequency Counter</h1>
            <input 
                type="text"  
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Enter elements separated by commas" 
            />
            <input 
                type="text" 
                value={element} 
                onChange={(e) => setElement(e.target.value)} 
                placeholder="Enter element to count" 
            />
            <button onClick={countFrequency}>Count Frequency</button>
            <p>Frequency of "{element}": {frequency}</p>
        </div>
    );
}

export default App;


