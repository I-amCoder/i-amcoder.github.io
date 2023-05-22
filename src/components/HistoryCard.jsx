import React from "react";

const HistoryCard = ({ item }) => {
  const { body, created_at } = item;
  return (
    <div className="card">
      <div className="card-body">
        <span className="fw-bold">Transaction</span>: {body}
      </div>
      <div className="card-footer ">
        <div className="float-right">{created_at}</div>
      </div>
    </div>
  );
};

export default HistoryCard;
