import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import AutoSuggest from "react-autosuggest";

import "./styles.css";

const App = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [dataPasien, setDataPasien] = useState([]);
  // console.log(dataPeraturan);
  useEffect(() => {
    getDataPasien();
  }, []);
  const getDataPasien = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_URL + `/api/medis/find?pasien=${value}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      let res = await response.json();
      console.log("DATA PASIEN", res.data);
      setDataPasien(res.data);
    } catch (err) {
      alert(err.message);
    }
  };
  const lowerCasedCompanies = dataPasien.map((company) => {
    return {
      id: company.id,
      nama: company.nama.toLowerCase(),
    };
  });

  function getSuggestions(value) {
    return lowerCasedCompanies.filter((company) =>
      company.nama.includes(value.trim().toLowerCase())
    );
  }
  return (
    <div>
      <AutoSuggest
        style={{ border: "none" }}
        className="search-input"
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          console.log(value);
          setValue(value);
          setSuggestions(getSuggestions(value));
        }}
        onSuggestionSelected={(_, { suggestionValue }) =>
          console.log("Selected: " + suggestionValue)
        }
        getSuggestionValue={(suggestion) => suggestion.nama}
        renderSuggestion={(suggestion) => <span>{suggestion.nama}</span>}
        inputProps={{
          placeholder: "Nama Karyawan ...",
          value: value,
          onChange: (_, { newValue, method }) => {
            setValue(newValue);
          },
        }}
        highlightFirstSuggestion={true}
      />
    </div>
  );
};

export default App;
