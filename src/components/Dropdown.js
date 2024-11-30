import React from "react";

const Dropdown = ({ stocks, onSelect }) => (
    <div style={{ padding: "10px" }}>
        <select onChange={(e) => onSelect(e.target.value)} style={{ padding: "5px" }}>
            <option value="">Select a Stock</option>
            {stocks.map((stock) => (
                <option key={stock.symbol} value={stock.symbol}>
                    {stock.name}
                </option>
            ))}
        </select>
    </div>
);

export default Dropdown;