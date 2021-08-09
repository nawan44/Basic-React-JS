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

const data = {
  alamat: "Jakarta, Bekasi",
  jumlah: [3, 4],
  nama: "rachmat, gunawan",
};
const aa = [data];
const as = data.nama.split(",");
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

function ReactHook({ onClose }) {
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
  const handleChange = (e, index) => {
    const newDoc = [...details_data];
    newDoc[index][e.target.name] = e.target.value;
    set_details_data(newDoc);
    // console.log("newDoc", newDoc);
  };

  // DROPDOWN
  const filterRef = React.useRef();
  const ref = useRef();
  const [open, setOpen] = React.useState(false);
  const [text, setText] = useState("");
  const [menu, setMenu] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [filterExpression, setFilterExpression] = useState("");
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
    // const value = event.target.value;
    // setSelectedOption(value);
  };
  const handleChangeAAA = (event, field) => {
    const abc = { ...state, [event.target.name]: event.target.value };
    setState(abc);

    // if (event.keyCode === 13) {
    //   setSelectedOption({ open: !!field });
    // }
  };
  const handleChangeCing = (input, event) => {
    // const abc = { ...state, [event.target.name]: event.target.value };
    // setState(abc);
    if (event.key === "Enter") {
      setOpen({ open: !!input });
    }
  };
  const handleInputChange = (input, event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };
  const keyPress = (e) => {
    if (e.key == "enter") {
      handleCloseForm();
      console.log("loggggggggggg");
    }
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
  const onSelectClose = () => {
    console.log("close");
  };
  const handleCloseForm = () => {
    onClose(true);
  };
  const onSelectOpen = () => {
    console.log("open");
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
            onChange: onChangeSelection,
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
          onChange={handleChangeAAA}
          // value={state.cara_pemakaian}
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
          <hr />

          <InputLabel id="lain">Lain -lain</InputLabel>
          <Select
            labelId="lain"
            id="lain"
            name="select"
            value={state.cara_pemakaian}
            fullWidth
            handleChange={handleChangeAAA}
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
              onChange={handleChangeAAA}
              // onKeyDown={keyPress}
              onKeyPress={(data, input) => {
                if (data.charCode === 13) {
                  console.log("Key `Enter` pressed");
                  data.stopPropagation();
                }
              }}
              // menuIsOpen={open}
            />
          </Select>
        </TextField>
      </FormControl>
    </div>
  );
}

export default ReactHook;
