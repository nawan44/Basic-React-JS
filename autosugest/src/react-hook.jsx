import "./App.css";
import React, { useState, useEffect } from "react";
import Autosuggest from "react-autosuggest";
import { Grid, TextField, Button } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";

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
  const [date, setDate] = useState();

  const [kirimObat, setKirimObat] = useState({
    nama_obat: "",
    jumlah: "",
    tanggal_expired: "",
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    control,
  } = useForm();
  const [nicknameValue, setNicknameValue] = useState("");
  const [nicknameSuggestions, setNicknameSuggestions] = useState([]);
  const [emailValue, setEmailValue] = useState("");
  const [alamatValue, setAlamatValue] = useState("");
  const [jumlahValue, setJumlahValue] = useState("");
  const [errorJumlah, setErrorJumlah] = useState(false);

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
  const onSubmit = (e) => {
    e.preventDefault();
    if (e) {
      console.log("data OK");
    }
  };
  console.log("formData", formData);
  const handleChange = (event) => {
    setKirimObat({
      ...kirimObat,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
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
        </div>{" "}
        <br /> <br />
        {/* <Grid item sm={5}>
          <TextField
            label="Tanggal Expired"
            margin="dense"
            variant="outlined"
            name="tanggal_expired"
            // required
            minDate={(new Date().getFullYear() - 18, 11, 31)}
            onChange={handleChange}
            value={kirimObat.tanggal_expired}
            {...register("tanggal_expired", { required: true })}
            error={errors.tanggal_expired}
            InputLabelProps={{
              shrink: true,
              required: true,
              validate: (value) => value < 1,
            }}
            type="date"
            style={{ maxWidth: "100%", margin: "0 5px" }}
            className="text4"
          />
          {errors.tanggal_expired?.type === "required" && (
            <span
              style={{
                fontSize: "9px",
                color: "red",
                margin: " 10px 0 0 0px",
              }}
            >
              {" "}
              *Nama Obat Kosong
            </span>
          )}
        </Grid>{" "} */}
        <br /> <br />
        <Button
          type="submit"
          style={{ background: "red" }}
          name="search-button"
          onClick={validate}
        >
          Save{" "}
        </Button>
      </form>
    </div>
  );
}

export default ReactHook;
