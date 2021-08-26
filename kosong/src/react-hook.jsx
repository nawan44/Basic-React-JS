import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Autosuggest from "react-autosuggest";
import {
  Grid,
  TextField,
  FormControl,
  MenuItem,
  Select,
  Typography,
  InputLabel,
} from "@material-ui/core";

const data = [
  {
    fname: "Jayne",
    lname: "Washington",
    email: "jaynewashington@exposa.com",
    gender: "female",
  },
  {
    fname: "Peterson",
    lname: "Dalton",
    email: "petersondalton@exposa.com",
    gender: "male",
  },
  {
    fname: "Velazquez",
    lname: "Calderon",
    email: "velazquezcalderon@exposa.com",
    gender: "male",
  },
  {
    fname: "Norman",
    lname: "Reed",
    email: "normanreed@exposa.com",
    gender: "male",
  },
];
function ReactHook({ onClose }) {
  const [filter, setFilter] = useState("");
  const [state, setState] = useState("");
  const handleChange = (event) => {
    setFilter({ filter: event.target.value });
  };
  const lowercasedFilter = filter.toLowerCase();
  const filteredData = data.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toLowerCase().includes(lowercasedFilter)
    );
  });
  console.log("data", data);
  console.log("filter", filter);
  // console.log("data", data);
  // console.log("data", data);
  // console.log("data", data);
  // console.log("data", data);
  // console.log("data", data);

  return (
    <div>
      <input value={filter} onChange={handleChange} />
      {filteredData.map((item) => (
        <div key={item.email}>
          <div>
            {item.fname} {item.lname} - {item.gender} - {item.email}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReactHook;
