import React from "react";

function Search({ searchText, setSearchText }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search company"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{
          width: "350px",
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          outline:"none",
          fontSize:"14px"
        }}
      />
    </div>
  );
}

export default Search;
