import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const MyAreaChart = ({ data }) => {
    return (
        <div className='md:mx-auto'>
            <h1 className='text-2xl text-center text-blue-700 font-bold mb-5'>Investment VS Revenue</h1>
            <AreaChart width={330} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <Area type='monotone' dataKey={'revenue'} stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type='monotone' dataKey={'investment'} stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <XAxis dataKey={'month'} />
                <YAxis />
                <Tooltip />
            </AreaChart>
        </div>
    );
};

export default MyAreaChart;