import React, { useState, useEffect } from "react";
import Autosuggest from "react-autosuggest";
import { TextField, Button, Typography } from "@material-ui/core";

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

export default function Child2Parent2() {
  const handleSubmitChild2Parent2 = (E) => {
    E.preventDefault();
    console.log("handleSubmitChild2Parent2");
  };
  const [nicknameValue, setNicknameValue] = useState("");
  const [nicknameSuggestions, setNicknameSuggestions] = useState([]);
  const [emailValue, setEmailValue] = useState("");
  const [alamatValue, setAlamatValue] = useState("");
  function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  const [details_data, set_details_data] = useState([
    { nickname: "", email: "" },
  ]);
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
  const onNicknameSuggestionSelected = (event, { suggestion }) => {
    console.log("ggggggg", suggestion);
    setEmailValue(suggestion.email);
    setAlamatValue(suggestion.alamat);
  };
  const handleChange = (e, index) => {
    const newDoc = [...details_data];
    newDoc[index][e.target.name] = e.target.value;
    set_details_data(newDoc);
    console.log("newDoc", newDoc);
  };
  return (
    <div>
      <Typography>Parent 2</Typography>
      <form onSubmit={handleSubmitChild2Parent2}>
        <div>
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
                console.log(newValue);
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
              onChange: (emailValue) => {
                setEmailValue(emailValue);
              },
            }}
          />
          <TextField
            variant="outlined"
            inputProps={{
              placeholder: "Email ...",
              value: alamatValue,
              onChange: (alamatValue) => {
                setAlamatValue(alamatValue);
              },
            }}
          />
        </div>
        <br />
        <Button type="submit" variant="contained" color="secondary">
          Child 2 Parent 2
        </Button>
      </form>
    </div>
  );
}
