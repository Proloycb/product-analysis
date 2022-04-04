import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const MyLineChart = ({ data }) => {
    return (
        <div className='md:mx-auto'>
            <h1 className='uppercase text-2xl text-center text-blue-700 font-bold mb-5'>Month Wise Sell</h1>
            <LineChart width={330} height={300} data={data}>
                <Line type="monotone" dataKey={'sell'} stroke="#82ca9d" />
                <XAxis dataKey={'month'}></XAxis>
                <YAxis></YAxis>
                <Tooltip />
                <Legend />
            </LineChart>
        </div>
    );
};

export default MyLineChart;