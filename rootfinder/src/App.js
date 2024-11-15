import React from 'react';
import BisectionMethod from './components/BisectionMethod';
import NewtonMethod from './components/NewtonMethod';
import FunctionPlot from './components/FunctionPlot';

function App() {
    return (
        <div>
            <h1>RootFinder</h1>
            <BisectionMethod />
            <NewtonMethod />
            <FunctionPlot />
        </div>
    );
}

export default App;
