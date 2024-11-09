"use client"
import { useEffect, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";

interface DataItem {
    name: string;
    value: number;
}

export default function CustomPieChart() {
    const data: DataItem[] = [
        { name: "Entertainment", value: 50 },
        { name: "Bills", value: 750 },
        { name: "Dining Out", value: 75 },
        { name: "Personal Care", value: 100 },
    ];
    
    const COLORS: string[] = ["#4CAF50", "#FF9800", "#00BCD4", "#7E57C2"]; // Custom colors for each section
    
    // Total budget and used budget
    const totalBudget: number = 975;
    const usedBudget: number = 338;

    const [isClient, setIsClient] = useState<boolean>(false);

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
}