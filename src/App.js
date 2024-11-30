import React, { useState } from "react";
import Header from "./components/Header.js";
import MainChart from "./components/MainChart.js";
import SidePanel from "./components/sidePanel/SidePanel.js";
import FooterCharts from "./components/FooterCharts.js";
import HistoricalReturnsTable from "./components/historicalReturns/historicalReturns.js";
// import DatePanel from './components/DatePanel';
import ReactDatePicker from 'react-datepicker';
import dayjs from 'dayjs'; // Import Day.js
import "react-datepicker/dist/react-datepicker.css";


const App = () => {
  const [selectedStock, setSelectedStock] = useState({
    name: 'Google',
    symbol: 'Ggl',
  });
  const [searchQuery, setSearchQuery] = useState('Ggl');

  const [stockData, setStockData] = useState(null);
  const [metricsData, setMetricsData] = useState({});
  // State for selected start and end date
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());

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
  // Function to handle relative date selection
  const handleRelativeDateSelection = (range) => {
    let newStartDate = startDate;
    let newEndDate = endDate;

    switch (range) {
      case '1-month':
        newStartDate = dayjs().subtract(1, 'month'); // Subtract 1 month
        break;
      case '3-month':
        newStartDate = dayjs().subtract(3, 'month'); // Subtract 3 months
        break;
      case '1-year':
        newStartDate = dayjs().subtract(1, 'year'); // Subtract 1 year
        break;
      case '5-years':
        newStartDate = dayjs().subtract(5, 'year'); // Subtract 5 years
        break;
      default:
        break;
    }

    setStartDate(newStartDate);
    setEndDate(newEndDate);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#1e2a38', color: '#fff' }}>
      {/* Header */}
      <Header onSearch={handleSearch} />

      {/* Main Content */}
      <div style={{ display: 'flex', padding: '20px', justifyContent: 'space-between' }}>
        <div style={{ flex: 3, marginRight: '20px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, width: '100%' }}>
            {/* Date Picker and Relative Date Picker */}
            <div style={{ marginBottom: '20px'}}>
              <ReactDatePicker
                selected={startDate.toDate()}
                onChange={(date) => setStartDate(dayjs(date))}
                selectsStart
                startDate={startDate.toDate()}
                endDate={endDate.toDate()}
                dateFormat="yyyy-MM-dd"
                placeholderText="Start Date"
              />
              <span style={{ margin: '0 10px' }}>to</span>
              <ReactDatePicker
                selected={endDate.toDate()}
                onChange={(date) => setEndDate(dayjs(date))}
                selectsEnd
                startDate={startDate.toDate()}
                endDate={endDate.toDate()}
                dateFormat="yyyy-MM-dd"
                placeholderText="End Date"
              />
                <select onChange={(e) => handleRelativeDateSelection(e.target.value)} style={{ marginLeft:'40px', padding: '8px', fontSize: '14px', cursor: 'pointer' }}>
                  <option value="">Select Relative Date Range</option>
                  <option value="1-month">Last 1 Month</option>
                  <option value="3-month">Last 3 Months</option>
                  <option value="1-year">Last 1 Year</option>
                  <option value="5-years">Last 5 Years</option>
                </select>
            </div>

            {/* Relative Date Range Selector */}
            

            <div style={{ flex: 1 }}>
              <MainChart stockData={stockData} />
            </div>

            <div style={{ flex: 2 }}>
              <HistoricalReturnsTable stockData={metricsData?.historical || []} />
            </div>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <SidePanel stockData={metricsData?.data || {}} />
        </div>
      </div>
    </div>
  );
};

export default App;