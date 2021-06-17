import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import AutoSuggest from "react-autosuggest";

import "./styles.css";

const companies = [
  { id: 1, name: "Company1" },
  { id: 2, name: "Company2" },
  { id: 3, name: "Company3" },
  { id: 4, name: "Company4" },
  { id: 5, name: "Company5" },
  { id: 6, name: "Company6" },
  { id: 7, name: "Company7" },
];

const lowerCasedCompanies = companies.map((company) => {
  return {
    id: company.id,
    name: company.name.toLowerCase(),
  };
});

const App = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function getSuggestions(value) {
    return lowerCasedCompanies.filter((company) =>
      company.name.includes(value.trim().toLowerCase())
    );
  }
  return (
    <div>
      <AutoSuggest
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
        getSuggestionValue={(suggestion) => suggestion.name}
        renderSuggestion={(suggestion) => <span>{suggestion.name}</span>}
        inputProps={{
          placeholder: "Type 'c'",
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
