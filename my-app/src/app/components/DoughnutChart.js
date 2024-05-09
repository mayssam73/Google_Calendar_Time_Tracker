"use client"
import { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

export default function DoughnutChart() {
    const chartRef = useRef(null)

    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy()
            }
        }

        const context = chartRef.current.getContext("2d");

        const newChart = new Chart(context, {
            type: "doughnut",
            data: {
                labels: ["John", "Jane", "Doe"],
                datasets: [
                    {
                        label: "Info",
                        data: [34, 64, 23],
                        backgroundColor: ["orange", "red", "green"],
                        borderColor: ["orange", "red", "green"],
                    },
                ],
            },
            options: {
                responsive: true,
                spacing: 10,
            }
        });
        
        chartRef.current.chart = newChart
    }, []);

    return (
        <div style={({position: "relative", width: "90vw", height: "80vh"})}>
            <canvas ref={chartRef}/>
        </div>
    );
}