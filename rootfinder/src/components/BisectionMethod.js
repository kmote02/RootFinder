import React, { useState } from 'react';
import { bisectionMethod } from '../utils/mathUtils';

const BisectionMethod = () => {
    const [functionStr, setFunctionStr] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const root = bisectionMethod(functionStr, -10, 10, 0.001);
        setResult(root);
    };

    return (
        <div>
            <h2>Bisection Method</h2>
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

export default BisectionMethod;
