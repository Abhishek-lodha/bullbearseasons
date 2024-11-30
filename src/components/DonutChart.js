import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const DonutChart = () => {
    const options = {
        chart: { type: "pie", backgroundColor: "#14212b" },
        title: { text: null },
        plotOptions: {
            pie: {
                innerSize: "50%",
                dataLabels: { enabled: false },
            },
        },
        series: [
            {
                name: "Share",
                data: [
                    { name: "Pattern", y: 131.04, color: "#00aaff" },
                    { name: "Rest", y: 2.85, color: "#7f8fa4" },
                ],
            },
        ],
        credits: { enabled: false },
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default DonutChart;