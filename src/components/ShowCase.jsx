import React from "react";
import HistoryCard from "./HistoryCard";
import { useEffect } from "react";
import { useState } from "react";

const ShowCase = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: 204,
        query: {
          filter: {},
          view: "receiver",
          offset: 0,
          limit: 15,
          nulls_last: 1,
          order_by: [{ field: "id", order: "DESC" }],
        },
      }),
    };
    fetch("https://api.csgo-rep.com", requestOptions)
      .then((response) => response.json())
      .then((data) => setTransactions(data.data));
  }, []);
  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col-12">
          <h2>Transaction History:</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            {transactions.map((item, index) => {
              return (
                <div key={index} className="mt-4">
                  <HistoryCard item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
