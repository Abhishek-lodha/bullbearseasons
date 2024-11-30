import React, { useState } from "react";
import Header from "./components/Header";
import MainChart from "./components/MainChart";
import SidePanel from "./components/sidePanel/SidePanel";
import FooterCharts from "./components/FooterCharts";
import HistoricalReturnsTable from "./components/historicalReturns/historicalReturns";
// import DatePanel from './components/DatePanel';


const App = () => {
  const [selectedStock, setSelectedStock] = useState({
    name: 'Google',
    symbol: 'Ggl',
  });
  const [searchQuery, setSearchQuery] = useState('Ggl');

  const [stockData, setStockData] = useState(null);
  const [metricsData, setMetricsData] = useState({});

  const handleSearch = (symbol) => {
    fetchStockData(symbol);
    fetchMetricsData();
  };

  const restHelper = async (path) => {
    const payload = {
      ioc: "Adani",
      fromDate: "11-01",
      toDate: "11-02",
    };
    const url = "https://season-ix0n.onrender.com/" + path;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching metrics data:", error);
    }
  }

  const fetchMetricsData = async () => {
    const data = await restHelper('metrics');
    setMetricsData(data);
  };

  const fetchStockData = async () => {
    const response = await restHelper("average_charts");
    setStockData(response);
  };
  // const fetchStockData = async (symbol) => {
  //   const generateRandomData = () => {
  //     const dates = [];
  //     const prices = [];
  //     const numDays = 12;

  //     // Generate random data for 12 months
  //     for (let i = 0; i < numDays; i++) {
  //       const date = new Date(2023, i, 1).toLocaleString("default", { month: "short" });
  //       const price = (Math.random() * (150 - 90) + 90).toFixed(2); // Random price between 90 and 150
  //       dates.push(date);
  //       prices.push(parseFloat(price));
  //     }

  //     // Random performance metrics
  //     const annualizedReturn = (Math.random() * 50 + 100).toFixed(2); // Random between 100 and 150%
  //     const winningTrades = (Math.random() * 100).toFixed(2); // Random percentage
  //     const averageProfit = (Math.random() * 50 + 20).toFixed(2); // Random profit between 20 and 70 points
  //     const gains = Math.floor(Math.random() * 30); // Random number of gains
  //     const losses = Math.floor(Math.random() * 10); // Random number of losses

  //     return {
  //       dates,
  //       prices,
  //       annualizedReturn,
  //       winningTrades,
  //       averageProfit,
  //       gains,
  //       losses,
  //     };
  //   };

  //   // Generate and set random data
  //   const data = generateRandomData();
  //   setStockData(data);
  // };

  // const handleDateChange = (newStartDate, newEndDate, rangeType) => {
  //   setStartDate(newStartDate);
  //   setEndDate(newEndDate);
  //   fetchStockData(selectedStock.symbol, newStartDate, newEndDate);
  // };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#1e2a38", color: "#fff" }}>
      {/* Header */}
      <Header onSearch={handleSearch} />


      {/* Main Content */}
      <div style={{ display: "flex", padding: "20px", justifyContent: "space-between" }}>
        <div style={{ flex: 3, marginRight: "20px", display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 1, width: "100%" }}>
            <MainChart stockData={stockData} />
          </div>
          <div style={{ flex: 2 }}>
            <HistoricalReturnsTable stockData={metricsData?.historical || []} />
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <SidePanel stockData={metricsData?.data || {}} />
        </div>
      </div>

      {/* <FooterCharts /> */}
    </div>
  );
};

export default App;