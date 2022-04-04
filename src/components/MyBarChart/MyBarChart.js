import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const MyBarChart = ({data}) => {
    return (
        <div className='md:mx-auto mt-12'>
            <h1 className='text-2xl text-center text-blue-700 font-bold mb-5'>Investment VS Revenue</h1>
            <BarChart width={330} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <Bar type='monotone' dataKey={'revenue'} stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Bar type='monotone' dataKey={'investment'} stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <XAxis dataKey={'month'} />
                <YAxis />
                <Tooltip />
            </BarChart>
        </div>
    );
};

export default MyBarChart;