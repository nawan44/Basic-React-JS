import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Autosuggest from "react-autosuggest";
import { Grid, TextField, FormControl, MenuItem } from "@material-ui/core";

const data = {
  alamat: "Jakarta, Bekasi",
  jumlah: [3, 4],
  nama: "rachmat, gunawan",
};

const aa = [data];

const as = data.nama.split(",");
// console.log("ar", ar);

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

function ReactHook() {
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
    // console.log("ggggggg", suggestion);
    setEmailValue(suggestion.email);
    setAlamatValue(suggestion.alamat);
  };
  const handleChange = (e, index) => {
    const newDoc = [...details_data];
    newDoc[index][e.target.name] = e.target.value;
    set_details_data(newDoc);
    // console.log("newDoc", newDoc);
  };
  // var result = data.map((person) => ({
  //   value: person.nama,
  //   text: person.jumlah,
  // }));
  // console.log(result);

  // DROPDOWN
  const filterRef = React.useRef();
  const ref = useRef();
  const [text, setText] = useState("");
  const [menu, setMenu] = useState(null);

  const [selectedOption, setSelectedOption] = React.useState("");
  const [filterExpression, setFilterExpression] = React.useState("");
  const [state, setState] = useState({
    nama_obat: null,
    id_obat: null,
    frekuensi_pemakaian: null,
    jumlah: null,
    cara_pemakaian: null,
  });
  console.log("state", state);
  const onChangeSelection = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const handleChangeCuk = (event) => {
    const abc = { ...state, [event.target.name]: event.target.value };
    setState(abc);
  };
  const stopImmediatePropagation = (e) => {
    // filterRef.current.focus();
    e.stopPropagation();
    // e.preventDefault();
  };
  const onChangeExpression = (event) => {
    const value = event.target.value.toString();
    console.log(`value:`, value);
    setState(value);
  };

  return (
    <div className="container">
      <Grid spacing={1} container>
        {as &&
          as.map((key) => (
            <TextField
              variant="outlined"
              value={key}
              inputProps={{
                placeholder: "Data data ...",
              }}
            />
          ))}
      </Grid>
      <FormControl style={{ marginTop: "20px 0 0 0" }}>
        <TextField
          select
          margin="dense"
          variant="outlined"
          label="Cara Pakai"
          style={{ width: "180px", margin: "30px 0 0 0 " }}
          InputProps={{
            className: "text6Props",
          }}
          // InputLabelProps={{ shrink: true }}
          SelectProps={{
            // onChange: onChangeSelection,
            // value: state.cara_pemakaian,

            MenuProps: {
              className: "text6-menu-props",
              getContentAnchorEl: null,
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              size: "small",
              margin: "dense",
            },
          }}
          id="cara_pemakaian"
          name="cara_pemakaian"
          onChange={handleChangeCuk}
          value={state.cara_pemakaian}
        >
          <MenuItem value="Sebelum Makan" size="small" margin="dense">
            Sebelum Makan
          </MenuItem>
          <MenuItem value="Setelah Makan" size="small" margin="dense">
            Setelah Makan
          </MenuItem>
          <MenuItem value="Pemakaian Luar" size="small" margin="dense">
            Pemakaian Luar
          </MenuItem>
          <MenuItem value="Ditetes" size="small" margin="dense">
            Ditetes
          </MenuItem>
          <MenuItem
            name="lain"
            size="small"
            margin="dense"
            onKeyDown={(e) => e.stopPropagation()}
            onClickCapture={stopImmediatePropagation}
            // value={handleChangeCuk}
            // onChange={onChangeSelection}
            // TextFieldProps ={{
            //   onKeyDown={(e) => e.stopPropagation()}
            //   // onChange={(event, selectedOption) => selectedOption} // You can get the `selectedValue` inside your handler function on every time user select some new value
            //   // inputRef={filterRef}
            //   // onChange={() => {
            //   //   handleChangeCuk;
            //   //   console.log("change");
            //   // }}
            //   // name="cara_pemakaian"

            // }}
          >
            <TextField
              style={{ background: "red" }}
              id="standard-full-width"
              style={{ margin: 8 }}
              label="Lain -lain"
              placeholder="Lain -lain"
              fullWidth
              name="cara_pemakaian"
              value={state.cara_pemakaian}
              margin="dense"
              InputLabelProps={{
                shrink: true,
              }}
              value={state.cara_pemakaian}
              onChange={handleChangeCuk}
            />
          </MenuItem>
        </TextField>
      </FormControl>
    </div>
  );
}

export default ReactHook;
