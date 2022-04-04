import React, { useEffect, useState } from 'react';
import MyAreaChart from '../MyAreaChart/MyAreaChart';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyPieChart from '../MyPieChart/MyPieChart';

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data));
    },[])
    return (
        <div className='grid md:grid-cols-2 mt-8'>
            <MyLineChart data={data}></MyLineChart>
            <MyAreaChart data={data}></MyAreaChart>
            <MyBarChart data={data}></MyBarChart>
            <MyPieChart data={data}></MyPieChart>
        </div>
    );
};

export default Dashboard;