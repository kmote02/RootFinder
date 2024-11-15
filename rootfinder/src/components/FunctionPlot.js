import React from 'react';
import Plot from 'react-plotly.js';

const FunctionPlot = () => {
    const generateData = () => {
        const x = [];
        const y = [];
        const z = [];

        for (let i = -10; i <= 10; i += 0.5) {
            for (let j = -10; j <= 10; j += 0.5) {
                x.push(i);
                y.push(j);
                z.push(i ** 2 + j ** 2); // Example: x^2 + y^2
            }
        }

        return { x, y, z };
    };

    const { x, y, z } = generateData();

    return (
        <div>
            <h2>3D Function Visualization</h2>
            <Plot
                data={[
                    {
                        x,
                        y,
                        z,
                        type: 'mesh3d',
                    },
                ]}
                layout={{ title: '3D Plot', autosize: true }}
            />
        </div>
    );
};

export default FunctionPlot;
