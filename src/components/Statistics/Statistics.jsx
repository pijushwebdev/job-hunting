import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {

    const assignMarks = [
        {
            assignment: 'assign 1',
            marks: 60
        },
        {
            assignment: 'assign 2',
            marks: 40
        },
        {
            assignment: 'assign 3',
            marks: 50
        },
        {
            assignment: 'assign 4',
            marks: 60
        },
        {
            assignment: 'assign 5',
            marks: 30
        },
        {
            assignment: 'assign 6',
            marks: 10
        },
        {
            assignment: 'assign 7',
            marks: 60
        },
    ]
    return (
        <div className='flex justify-center'>
            <AreaChart
                width={500}
                height={400}
                data={assignMarks}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="assignment" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>


    );
};

export default Statistics;