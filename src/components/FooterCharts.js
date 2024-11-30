import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const FooterCharts = () => {
    const cumulativeOptions = {
        chart: { type: "line", backgroundColor: "#1e2a38" },
        title: { text: "Cumulative Profit", style: { color: "#fff" } },
        xAxis: { categories: Array.from({ length: 25 }, (_, i) => `Year ${i + 1999}`) },
        yAxis: { title: { text: "Profit", style: { color: "#fff" } } },
        series: [{ name: "Profit", data: [10, 20, 50, 100, 200, 250, 300, 450, 500] }],
        credits: { enabled: false },
    };

    const patternOptions = {
        chart: { type: "column", backgroundColor: "#1e2a38" },
        title: { text: "Pattern Returns", style: { color: "#fff" } },
        xAxis: { categories: Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`) },
        yAxis: { title: { text: "Returns", style: { color: "#fff" } } },
        series: [{ name: "Returns", data: [5, 10, -3, 15, 20, -8, 10, 5, 10, -2, 18, 25] }],
        credits: { enabled: false },
    };

    return (
        <div style={{ display: "flex", justifyContent: "space-between", padding: "20px", gap: "20px" }}>
            <div style={{ flex: 1 }}>
                <HighchartsReact highcharts={Highcharts} options={cumulativeOptions} />
            </div>
            <div style={{ flex: 1 }}>
                <HighchartsReact highcharts={Highcharts} options={patternOptions} />
            </div>
        </div>
    );
};

export default FooterCharts;