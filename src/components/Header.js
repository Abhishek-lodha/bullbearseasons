import React, { useState } from "react";

const Header = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSearchClick = () => {
        onSearch(inputValue);
    };

    return (
        <header style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#14212b" }}>
            <div>
                <h2>{inputValue} <span style={{ fontSize: "16px", color: "#7f8fa4" }}>{inputValue.toUpperCase()}</span></h2>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Search instruments..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    style={{
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid #3c4a5d",
                        backgroundColor: "#2c3a4b",
                        color: "#fff",
                        outline: "none",
                    }}
                />
                <button
                    onClick={handleSearchClick}
                    style={{
                        marginLeft: "10px",
                        padding: "10px",
                        borderRadius: "5px",
                        backgroundColor: "#3c4a5d",
                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Search
        </button>
            </div>
        </header>
    );
};

export default Header;