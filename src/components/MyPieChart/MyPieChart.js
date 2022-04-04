import React from 'react';
import { PieChart, Tooltip, Pie } from 'recharts';

const MyPieChart = ({data}) => {
    return (
        <div className='mx-auto mt-12'>
            <h1 className='text-2xl text-center text-blue-700 font-bold mb-5'>Investment VS Revenue</h1>
            <PieChart width={400} height={300}>
                <Pie data={data} dataKey={'investment'} cx="50%" cy="50%" outerRadius={60} fill="#8884d8"/>
                <Pie data={data} dataKey={'revenue'} cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label/>
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default MyPieChart;