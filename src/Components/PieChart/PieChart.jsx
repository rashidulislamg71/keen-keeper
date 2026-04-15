import React, { useContext, useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Context } from '../../ContextAPI/Context';



function CustomPieChart() {

    const { timelineStats } = useContext(Context);
    console.log(timelineStats)

    const chartData = useMemo(() => {
        if (!timelineStats) return [];

        const data = [
            { name: "Call", value: timelineStats.call || 0, color: '#244d3f' },
            { name: "Text", value: timelineStats.text || 0, color: '#13af79' },
            { name: "Video", value: timelineStats.video || 0, color: '#0ab29e' }
        ]

        const total = data.reduce((sum, item) => sum + item.value, 0);

        if (total === 0) {
            return [
                { name: "No data available", value: 1, color: '#cecece' }
            ];
        }
        return data;

    }, [timelineStats]);

    return (
        <div className="flex flex-col items-center w-full max-w-md mx-auto">

            <div className="w-full h-80">
                <ResponsiveContainer className={"outline-none"} >
                    <PieChart>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={90}
                            paddingAngle={5}
                            cornerRadius={5}
                            dataKey="value"
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="flex justify-center gap-5 w-full px-4">
                {chartData.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">

                        <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: item.color }}
                        ></div>

                        <span className="text-sm font-medium text-gray-700">
                            {item.name}: <span className="text-gray-500">{item.value}</span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CustomPieChart;