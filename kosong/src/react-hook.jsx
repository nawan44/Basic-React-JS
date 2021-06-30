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
// console.log(users);

function ReactClass() {
  const [nicknameValue, setNicknameValue] = useState("");
  //console.log("nicknameValue", nicknameValue);
  const [nicknameSuggestions, setNicknameSuggestions] = useState([]);
  //console.log("nicknameSuggestions", nicknameSuggestions);

  const [emailValue, setEmailValue] = useState("");
  // console.log("emailValue", emailValue);

  const [alamatValue, setAlamatValue] = useState("");
  // console.log("ala", alamatValue);
  function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  const [details_data, set_details_data] = useState([
    { nickname: "", email: "" },
  ]);
  console.log("details_data", details_data);
  useEffect(() => {
    if (users) {
      set_details_data(users);
    }
  }, [users]);
  function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());
    const regex = new RegExp("^" + escapedValue, "i");

    return users.filter(
      (user) => regex.test(user.nickname) || regex.test(user.email)
    );
  }

  function getSuggestionNickname(suggestion) {
    console.log(suggestion.nickname);

    return suggestion.nickname;
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
  // called this function on `onChange` and store the data in `details_data`

  const handleChange = (e, index) => {
    const newDoc = [...details_data];
    newDoc[index][e.target.name] = e.target.value;
    set_details_data(newDoc);
    console.log("newDoc", newDoc);
  };
  return (
    <>
      {details_data.map((item, index) => {
        return (
          <div key={details_data.nickname}>
            <Autosuggest
              suggestions={nicknameSuggestions}
              onSuggestionsClearRequested={() => setNicknameSuggestions([])}
              onSuggestionsFetchRequested={({ value, index }) => {
                console.log("val", value);
                setNicknameValue(value);
                setNicknameSuggestions(getSuggestions(value));
              }}
              onSuggestionSelected={onNicknameSuggestionSelected}
              getSuggestionValue={getSuggestionNickname}
              renderSuggestion={renderSuggestion}
              value={details_data.nickname}
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
              value={details_data.email}
              onChange={(e) => handleChange(e, index)}
              name="email"
              inputProps={{
                placeholder: "Email ...",
              }}
              onChange={handleChange}
            />
          </div>
        );
      })}
    </>
  );
}

export default ReactClass;
