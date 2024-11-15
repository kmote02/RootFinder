import React, { useState } from 'react';
import { newtonMethod } from '../utils/mathUtils';

const NewtonMethod = () => {
    const [functionStr, setFunctionStr] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const root = newtonMethod(functionStr, 1, 0.001);
        setResult(root);
    };

    return (
        <div>
            <h2>Newton's Method</h2>
            <form onSubmit={handleSubmit}>
                <label>Function:</label>
                <input 
                    type="text" 
                    value={functionStr} 
                    onChange={(e) => setFunctionStr(e.target.value)} 
                    placeholder="e.g., x^3 - x - 2" 
                />
                <button type="submit">Find Root</button>
            </form>
            {result && <p>Root: {result}</p>}
        </div>
    );
};

export default NewtonMethod;
