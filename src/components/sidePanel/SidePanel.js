import React from "react";
import DonutChart from "../DonutChart";
import "./sidepanel.css";

const getDisplayValue = (obj, key) => {
    if (!obj || !obj[key]) {
        return "N/A";
    }
    const { value, unit } = obj[key];
    console.log(typeof value);

    if (typeof value !== "number") {
        // Handle missing or invalid properties
        return "NOPE";
    }
    const formattedValue = value.toFixed(2);
    const sign = value > 0 ? "+" : "";
    return { displayVal: `${sign} ${formattedValue} ${unit === "percent" ? "%" : unit}`, isNegative: value< 0 };
}

const SidePanel = ({ stockData }) => (
    <div style={{ padding: "20px", backgroundColor: "#14212b", borderRadius: "5px" }}>
        {/* <DonutChart /> */}
        {stockData ? (
            <>
                <div className="section">
                    <div className="stat">
                        <p className="value">{getDisplayValue(stockData, 'Average_return_percentage').displayVal}</p>
                        <p>Average Return</p>
                    </div>
                    <div className="stat">
                        <p className="value">{getDisplayValue(stockData, 'Average_returns_in_points').displayVal}</p>
                        <p>Avg Return Pts</p>
                    </div>
                </div>

                {/* Return Section */}
                <div className="section">
                    <div className="stat">
                        <p className="value">{getDisplayValue(stockData, 'Total_returns_in_points').displayVal}</p>
                        <p>Total Return</p>
                    </div>
                    <div className="stat">
                        <p className="value negative">{getDisplayValue(stockData, 'median_profit_percent').displayVal}</p>
                        <p>Median Profit</p>
                    </div>
                </div>
                <div className="section">
                    <div className="stat">
                        <p className="value">{getDisplayValue(stockData, 'profit_percentage').displayVal}</p>
                        <p>Profit Percent</p>
                    </div>
                    <div className="stat">
                        <p className="value">{getDisplayValue(stockData, 'loss_profit_percentage').displayVal}</p>
                        <p>Loss Profit Percent</p>
                    </div>
                </div>

                {/* Profit Section */}
                <div className="section">
                    <div className="stat">
                        <p className="value">{getDisplayValue(stockData, 'max_profit_percentage').displayVal}</p>
                        <p>Max Profit</p>
                    </div>
                    <div className="stat">
                        <p className="value">{getDisplayValue(stockData, 'max_loss_percentage').displayVal}</p>
                        <p>MAx Loss</p>
                    </div>
                </div>

                <div className="section">
                    <div className="stat">
                        <p className="value">{getDisplayValue(stockData, 'winning_trades').displayVal}</p>
                        <p>Winning Trades</p>
                    </div>
                    <div className="stat">
                        <p className="value">{getDisplayValue(stockData, 'losing_trades').displayVal}</p>
                        <p>Losing trades</p>
                    </div>
                </div>

                {/* Gains & Losses */}
                <div className="section gains-losses">
                    <div className="gains">
                        <p className="value">10</p>
                        <p>Gains</p>
                        <p className="value">+7.12%</p>
                        <p>Profit %</p>
                        <p className="value">+17.32%</p>
                        <p>Max profit</p>
                    </div>
                    <div className="losses">
                        <p className="value">0</p>
                        <p>Losses</p>
                        <p className="value">0.00%</p>
                        <p>Profit %</p>
                        <p className="value">0.00%</p>
                        <p>Max loss</p>
                    </div>
                </div>
            </>
        ) : (
            <p style={{ color: "#fff" }}>Please search for a stock to display the performance metrics.</p>
        )}
    </div>

);

export default SidePanel;