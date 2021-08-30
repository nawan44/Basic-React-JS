import "./App.css";
import React, { useState, useEffect } from "react";
import Autosuggest from "react-autosuggest";
import { Grid, TextField, Button } from "@material-ui/core";

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
  const [nicknameValue, setNicknameValue] = useState("");
  const [nicknameSuggestions, setNicknameSuggestions] = useState([]);
  const [emailValue, setEmailValue] = useState("");
  const [alamatValue, setAlamatValue] = useState("");
  const [jumlahValue, setJumlahValue] = useState("");
  const [errorJumlah, setErrorJumlah] = useState(false);
  const [errors, setErrors] = useState("");

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
  const [formData, setFormData] = useState({ jumlah: "" });

  const [isFormInvalid, setIsFormInvalid] = useState(false);
  const validate = (formData) => {
    if (formData.jumlah !== "" && formData.jumlah < jumlahValue) {
      setIsFormInvalid(false);
    } else {
      setIsFormInvalid(true);
    }
  };
  const handleFormChange = (event) => {
    let data = formData;
    data[event.target.name] = event.target.value;
    setFormData(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(formData)) {
      console.log("data OK");
    }
  };
  console.log("formData", formData);
  return (
    <div className="container">
      <form onSubmit={handleSubmit} noValidate>
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
            variant="outlined"
            error={isFormInvalid}
            helperText={isFormInvalid && "Jumlah Melebihi stok / 0"}
            name="jumlah"
            label="jumlah"
            defaultValue={formData.jumlah}
            onChange={handleFormChange}
          />
          {/* {errors.jumlah && <p className="danger">{errors.jumlah}</p>} */}
        </div>
        <Button type="submit" name="search-button" onClick={validate}>
          Save{" "}
        </Button>
      </form>
    </div>
  );
}

export default ReactHook;
