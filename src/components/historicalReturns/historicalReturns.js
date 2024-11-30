import React from "react";
import DataTable from "react-data-table-component";
import "./historicalReturns.css";

const HistoricalReturnsTable = ({ stockData }) => {
    const columns = [
        {
            name: "Start Date",
            selector: (row) => row.start_date,
            sortable: false,
        },
        {
            name: "Start Price",
            selector: (row) => row.start_price,
            sortable: false,
            cell: (row) => `${row.start_price.toFixed(2)}`
        },
        {
            name: "End Date",
            selector: (row) => row.end_date,
            sortable: false,
        },
        {
            name: "End Price",
            selector: (row) => row.end_price,
            sortable: false,
            cell: (row) => `${row.end_price.toFixed(2)}`,
        },
        {
            name: "Year",
            selector: (row) => row.years,
            sortable: true,
        },
        {
            name: "Profit",
            selector: (row) => row.profit,
            sortable: true,
            cell: (row) => `${row.profit.toFixed(2)}`,
        },
        {
            name: "Profit Percent",
            selector: (row) => row.profit_percent,
            sortable: true,
            cell: (row) => `${row.profit_percent.toFixed(2)} %`,
        },
        {
            name: "Max Rise",
            selector: (row) => row.max_rise,
            sortable: true,
            cell: (row) => `${row.max_rise.toFixed(2)} %`,
        },
        {
            name: "Max Drop",
            selector: (row) => row.max_drop,
            sortable: true,
            cell: (row) => `${row.max_drop.toFixed(2)} %`,
        }
    ];

    const rowsPerPage = 20;

    // Check if pagination should be shown
    const shouldShowPagination = stockData.length > rowsPerPage;

    return (
        <div className="dashboard-card">
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
                Stocks Historical Returns
            </h2>
            {stockData.length > 0 ? (
                <DataTable
                    columns={columns}
                    data={stockData}
                    pagination={shouldShowPagination}
                    paginationPerPage={rowsPerPage}
                    paginationRowsPerPageOptions={[5, 10, 20, 25]}
                    highlightOnHover
                    pointerOnHover
                    customStyles={{
                        headRow: {
                            style: {
                                backgroundColor: "#1e2a38;",
                                color: "#c9d1d9",
                                fontWeight: "bold",
                            },
                        },
                        cells: {
                            style: {
                                color: "#c9d1d9",
                                backgroundColor: "#1e2a38",
                                borderBottom: "1px solid #30363d",
                                padding: "10px",
                            },
                        },
                    }}
                />
            ) : (
                <p style={{ textAlign: "center" }}>No data available.</p>
            )}
        </div>
    );
};

export default HistoricalReturnsTable;