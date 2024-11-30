import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const MainChart = ({ stockData }) => {
    const categories = stockData ? stockData.data.map((item) => {
        const [month, day] = item.Day.split("-");
        const date = new Date(2023, month - 1, day);
        return date.toLocaleDateString("en-US", { day: "2-digit", month: "short" });
    }) : [];
    const values = stockData ? stockData.data.map((item) => item.value) : [];

    const options = {
        chart: { type: "line", backgroundColor: "#1e2a38" },
        title: { text: "Annual Seasonality", style: { color: "#fff" } },
        xAxis: { categories: stockData ? categories : [] },
        yAxis: { title: { text: "Price", style: { color: "#fff" } } },
        series: [
            {
                name: "Price",
                data: stockData ? values : [],
            },
        ],
        tooltip: {
            formatter: function () {
                return `<b>${this.x}</b>: ${this.y.toFixed(2)}`;
            },
        },
        credits: { enabled: false },
    };

    return (
        <div style={{ padding: "20px", backgroundColor: "#14212b", borderRadius: "5px" }}>
            {stockData ? (
                <HighchartsReact highcharts={Highcharts} options={options} />
            ) : (
                <p style={{ color: "#fff" }}>Please search for a stock to display the chart.</p>
            )}
        </div>
    );
};

export default MainChart;