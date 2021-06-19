import "./App.css";
import React, { useState, useEffect } from "react";
import Autosuggest from "react-autosuggest";
import { TextField } from "@material-ui/core";
const users = [
  {
    nickname: "crazyfrog",
    email: "frog@foobar.com",
    alamat: "Jakarta",
  },
  {
    nickname: "tatanka",
    email: "ttt@hotmail.com",
    alamat: "Tangerang",
  },
  {
    nickname: "wild",
    email: "www@mail.ru",
    alamat: "Bogor",
  },
  {
    nickname: "race car",
    email: "racing@gmail.com",
    alamat: "Depok",
  },
  {
    nickname: "cook",
    email: "cooking@yahoo.com",
    alamat: "bekasi",
  },
];
console.log(users);

function ReactClass() {
  const [nicknameValue, setNicknameValue] = useState("");
  const [nicknameSuggestions, setNicknameSuggestions] = useState([]);
  const [emailValue, setEmailValue] = useState("");
  const [alamatValue, setAlamatValue] = useState("");
  console.log("ala", alamatValue);
  function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());
    const regex = new RegExp("^" + escapedValue, "i");

    return users.filter((user) => regex.test(user.nickname));
  }

  function getSuggestionNickname(suggestion) {
    console.log(suggestion.nickname);

    return suggestion.nickname;
  }

  function getSuggestionEmail(suggestion) {
    console.log(suggestion.email);
    return suggestion.email;
  }
  function getSuggestionAlamat(suggestion) {
    return suggestion.alamat;
  }

  function renderSuggestion(suggestion) {
    return (
      <span>
        {suggestion.nickname} - {suggestion.email}- {suggestion.alamat}
      </span>
    );
  }

  const onNicknameSuggestionSelected = (event, { suggestionValue }) => {
    setNicknameSuggestions({
      emailValue: suggestionValue.email,
      alamatValue: suggestionValue.alamat,
    });
  };

  return (
    <div className="container">
      <Autosuggest
        suggestions={nicknameSuggestions}
        onSuggestionsClearRequested={() => setNicknameSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          console.log("val", value);
          setNicknameValue(value);
          setNicknameSuggestions(getSuggestions(value));
        }}
        onSuggestionSelected={onNicknameSuggestionSelected}
        getSuggestionValue={getSuggestionNickname}
        renderSuggestion={renderSuggestion}
        value={nicknameValue}
        inputProps={{
          placeholder: "Nama Karyawan ...",
          value: nicknameValue,
          onChange: (event, { newValue, method }) => {
            setNicknameValue(newValue);
          },
        }}
        highlightFirstSuggestion={true}
      />
      <TextField
        variant="outlined"
        inputProps={{
          placeholder: "Email ...",
          value: emailValue,
          onChange: (event, { newValue, method }) => {
            setEmailValue({ newValue });
          },
        }}
      />
      <TextField
        variant="outlined"
        value={alamatValue}
        onChange={(event, { newValue }) => {
          setAlamatValue({ alamatValue: newValue });

          console.log("setAlamatValue", newValue);
        }}
      />
    </div>
  );
}

export default ReactClass;
