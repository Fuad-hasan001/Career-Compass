import React from "react";
import './Statistics.css'
import { PieChart, Pie, Legend, Tooltip } from "recharts";


const Statistics = () => {
    const data01 = [
        { name: "Total", value: 30 },
        { name: "Assignment-1", value: 30 },
        { name: "Assignment-2", value: 29 },
        { name: "Assignment-3", value: 30 },
        { name: "Assignment-4", value: 30 }

    ];

    const data02 = [
        { name: "Group A", value: 30 },
        { name: "Group B", value: 29 },
        { name: "Group C", value: 30 },
        { name: "Group D", value: 30 }

    ];
    return (
        <div className='statistics-container my-10'>

            
                <div className='info text-start'>
                    <h2 className='text-left font-bold text-purple-500 pb-5'>The graph shows the results of a survey on submitted Assignments. </h2>

                    <h3>Total Assignments: 12</h3>
                    <h3>Submitted: 8</h3>
                    <h3>Got Result: 4</h3>

                    <p className='text-green-500 font-bold pt-5'>Moreover, This pie chart illustrates the <span className='text-purple-500'>first 4 assignment marks</span> obtained based on the given tasks.</p>
                </div>
            

            <div>
                <PieChart width={1000} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx={200}
                        cy={200}
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Pie
                        dataKey="value"
                        data={data02}
                        cx={500}
                        cy={200}
                        innerRadius={40}
                        outerRadius={80}
                        fill="#82ca9d"
                    />
                    <Tooltip />
                </PieChart>
            </div>



        </div>
    );
};

export default Statistics;



