import React, { useState, useEffect } from "react";
import AppCard from "./AppCard";
import Search from "./Search";

function Subcategory({ subCategories }) {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [selectedSub, setSelectedSub] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("Subs", subCategories);
  }, [subCategories]);

  const fetchNav = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://mrbo.mrwallet.app/api/public/category/${id}/companies`
      );
      const result = await response.json();
      setData(Array.isArray(result) ? result : []);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setData([]);
      setLoading(false);
    }
  };

  const handleClick = (sub) => {
    setSelectedSub(sub);
    fetchNav(sub.id);
  };

  //filter for search
  const filteredCompanies = data.filter((company) =>
    company.name.toLowerCase().includes(searchText.toLocaleLowerCase())
  );

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <div style={{ minWidth: "200px" }}>
        {subCategories
          .filter((sub) => sub.id !== 48)
          .map((sub) => (
            <AppCard
              key={sub.id}
              sub={sub}
              onClick={() => handleClick(sub)}
              active={selectedSub && selectedSub.id === sub.id}
            />
          ))}
      </div>

      <div style={{ flex: 1 }}>
        {selectedSub && (
          <Search searchText={searchText} setSearchText={setSearchText} />
        )}

        {loading && <p>Loading...</p>}

        {selectedSub && filteredCompanies.length > 0 && (
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {filteredCompanies.map((company) => (
              <div
                key={company.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  width: "100px",
                }}
              >
                <img
                  src={`https://api.mrpay.it/gallery/${company.logo}`}
                  alt={company.name}
                  width={60}
                  height={60}
                  style={{ marginBottom: "5px" }}
                />
                <h4 style={{ fontSize: "14px", margin: 0 }}>{company.name}</h4>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Subcategory;
