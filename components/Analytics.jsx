"use client"

import { useState, useEffect } from 'react';
import Category from "./Category";
import { PotItem } from "./Pots";
import { PieChart, Pie, Cell } from "recharts";

export default function Analytics() {
    return (
        <Category categoryName="Top 5 Expenses">
            <div className="flex gap-2">
                <div className="pie-chart">
                    <CustomPieChart />
                </div>
                <div className="budget-item self-start flex-grow grid grid-cols-2 gap-4">
                    <PotItem potName='Food' amount='250' />
                    <PotItem potName='Utilities' amount='100' />
                    <PotItem potName='Entertainment' amount='32' />
                </div>
            </div>
        </Category>
    );
}

const data = [
    { name: "Entertainment", value: 50 },
    { name: "Bills", value: 750 },
    { name: "Dining Out", value: 75 },
    { name: "Personal Care", value: 100 },
];

const COLORS = ["#4CAF50", "#FF9800", "#00BCD4", "#7E57C2"]; // Custom colors for each section

// Total budget and used budget
const totalBudget = 975;
const usedBudget = 338;

const CustomPieChart = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <div className="relative w-64 h-64 mx-auto">
            {/* Pie Chart */}
            <PieChart width={250} height={250}>
                <Pie
                    data={data}
                    cx={125}
                    cy={125}
                    innerRadius={70}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>

            {/* Centered Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-4xl font-bold">£{usedBudget}</div>
                <div className="text-gray-500">of £{totalBudget} limit</div>
            </div>
        </div>
    );
};