import "./App.css";
import React, { useState, useEffect } from "react";
import Autosuggest from "react-autosuggest";
import { Grid, TextField } from "@material-ui/core";

const users = [
  {
    nickname: "crazyfrog",
    email: "frog@foobar.com",
    alamat: "Jakarta",
    jumlah: 10,
  },
  {
    nickname: "tatanka",
    email: "ttt@hotmail.com",
    alamat: "Tangerang",
    jumlah: 7,
  },
  {
    nickname: "wild",
    email: "www@mail.ru",
    alamat: "Bogor",
    jumlah: 8,
  },
  {
    nickname: "race car",
    email: "racing@gmail.com",
    alamat: "Depok",
    jumlah: 9,
  },
  {
    nickname: "cook",
    email: "cooking@yahoo.com",
    alamat: "bekasi",
    jumlah: 4,
  },
];

function ReactHook() {
  const [state, setState] = useState({ jumlah: null });
  const [nicknameValue, setNicknameValue] = useState("");
  const [nicknameSuggestions, setNicknameSuggestions] = useState([]);
  const [emailValue, setEmailValue] = useState("");
  const [alamatValue, setAlamatValue] = useState("");
  const [jumlahValue, setJumlahValue] = useState("");
  const [errorJumlah, setErrorJumlah] = useState(false);

  const handleChangeJumlah = (event) => {
    event.preventDefault();
    // let jml = event.target.value;

    // if (jumlahValue > jml - 1) {
    setState({ ...state, [event.target.name]: event.target.value });
    // } else {
    //   setErrorJumlah("❌ Stok Obat Kurang");
    // }
  };
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
    setJumlahValue(suggestion.jumlah);
  };
  const handleChange = (e, index) => {
    const newDoc = [...details_data];
    newDoc[index][e.target.name] = e.target.value;
    set_details_data(newDoc);
    console.log("newDoc", newDoc);
  };

  return (
    <div className="container">
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
        <br />
        <br />
        <TextField
          variant="outlined"
          label="stok"
          inputProps={{
            value: jumlahValue,
            onChange: (jumlahValue) => {
              setJumlahValue(jumlahValue);
            },
          }}
        />
        <br />
        <br /> {errorJumlah && <div className="error">{errorJumlah}</div>}
        <TextField
          type="number"
          variant="outlined"
          error={state.jumlah > jumlahValue}
          value={state.jumlah}
          name="jumlah"
          // max={state.jumlah > jumlahValue}
          required={state.jumlah < jumlahValue}
          label="jumlah"
          onChange={handleChangeJumlah}
          helperText={state.jumlah > jumlahValue && "Stok Obat Kurang"}
        />{" "}
      </div>
    </div>
  );
}

export default ReactHook;
