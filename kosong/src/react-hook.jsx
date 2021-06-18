import React, { useState, useEffect, useRef } from "react";
import AutoSuggest from "react-autosuggest";
import "./styles.css";

const App = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [dataPasien, setDataPasien] = useState([]);

  const refMobilePhone = dataPasien.map((a) => a.mobile_phone);
  console.log("ref", refMobilePhone);
  // useEffect(() => {
  //   refMobilePhone.target.value = dataPasien.map((a) => a.mobile_phone);
  //   setValue();
  // });
  useEffect(() => {
    getDataPasien();
  }, []);
  const handleChange = (event) => {
    event.preventDefault();

    setValue({ ...value, [event.target.name]: event.target.value });
  };
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
      // let hasil = (items) => {
      //   const nik = [];
      //   const mobilePhone = [];
      //   items.results.forEach((item) => {
      //     nik.push(item.nik);
      //     mobilePhone.push(item.mobilePhone);
      //   });
      // };
    } catch (err) {
      alert(err.message);
    }
  };
  const lowerCasedCompaniesNamaPasien = dataPasien.map((namaPasien) => {
    return {
      id: namaPasien.id,
      nama: namaPasien.nama.toLowerCase(),
    };
  });

  function getSuggestions(value) {
    return lowerCasedCompaniesNamaPasien.filter((namaPasien) =>
      namaPasien.nama.includes(value.trim().toLowerCase())
    );
  }

  return (
    <div>
      <AutoSuggest
        className="search-input"
        suggestions={suggestions}
        onSuggestionsClearRequestedNamaPasien={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          // console.log(value);
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
      <br />

      <AutoSuggest
        className="search-input"
        suggestions={suggestions}
        onSuggestionsClearRequestedNamaPasien={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          // console.log(value);
          setValue(value);
          setSuggestions(getSuggestions(value));
        }}
        onSuggestionSelected={(_, { suggestionValue }) =>
          console.log("Selected: " + suggestionValue)
        }
        getSuggestionValue={(suggestion) => suggestion.mobile_phone}
        renderSuggestion={(suggestion) => (
          <span>{suggestion.mobile_phone}</span>
        )}
        inputProps={{
          placeholder: "No Handphone ...",
          value: value,
          onChange: (_, { newValue, method }) => {
            setValue(newValue);
          },
        }}
        highlightFirstSuggestion={true}
      />
      <input ref={refMobilePhone} name="mobilePhone" value={value} />
    </div>
  );
};

export default App;
