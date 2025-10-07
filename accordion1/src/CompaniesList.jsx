import React, { useState, useEffect } from "react";

const BASE_URL = "https://mrbo.mrwallet.app/api/categories/tree ";

function CompaniesList({ categoryId }) {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!categoryId) return
    setLoading(true);

    fetch(`https://mrbo.mrwallet.app/api/public/category/${categoryId}/companies`)
      .then((res) => res.json())
      .then((data) => {
        setCompanies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gabim në marrjen e kompanive:", err);
        setLoading(false);
      });
  }, [categoryId]);

  if (!categoryId) {
    return <p>Choose a category</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>company</h2>
      {companies.length === 0 ? (
        <p>Don't have category.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {companies.map((company) => (
            <li
              key={company.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              {company.icon && (
                <img
                  src={`${BASE_URL}${company.icon}`}
                  alt={company.name}
                  style={{ width: "50px", height: "50px", marginRight: "15px" }}
                />
              )}
              <span>{company.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CompaniesList;
