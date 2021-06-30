import React, { useState, useEffect } from "react";

const detailsProps = [
  { text: "text1", amount: "100" },
  { text: "text2", amount: "200" },
];
const ReactContoh = () => {
  const [details_data, set_details_data] = useState([{ text: "", amount: "" }]);
  useEffect(() => {
    if (detailsProps) {
      set_details_data(detailsProps);
    }
  }, [detailsProps]);
  const details_handler = (event, index) => {
    const items = [...details_data];
    items[index][event.target.name] = event.target.value;
    set_details_data(items);
  };
  return (
    <div>
      {details_data.map((el, index) => {
        return (
          <div key={index}>
            <input
              name="text"
              value={el.text}
              onChange={(e) => details_handler(e, index)}
            />
            <input
              name="amount"
              value={el.amount}
              onChange={(e) => details_handler(e, index)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ReactContoh;
