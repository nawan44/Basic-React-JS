import "./App.css";
import React, { useState, useEffect } from "react";
import Autosuggest from "react-autosuggest";
import { Grid, TextField, Button } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
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
  const [state, setState] = useState();

  const [socialData, setSocialData] = useState([]);
  const handleAddSocial = () => {
    let array = socialData;
    array.push({ id: array.length + 1, socialname: "" });
    setState({ socialData: array });
  };
  const handleInputVlaueChange = (e, idx) => {
    let nextSocialData = socialData.slice();
    nextSocialData[idx].name = e.target.value;
    setState({ socialData: nextSocialData });
  };
  const handleRemoveSocial = (idx) => {
    let someArray = socialData;
    someArray.splice(idx, 1);
    setState({ socialData: someArray });
  };
  return (
    <div>
      {" "}
      <button
        className="newFlyerButton btn mb-4"
        type="button"
        onClick={handleAddSocial}
      >
        <span>
          <span className="buttonText">ADD NEW</span>
        </span>
      </button>{" "}
      <table className="table mt-3 bordered table-hover  white-table addNewSocial">
        <tbody>
          {socialData.map((Social, idx) => (
            <tr key={idx} className="row Social">
              <td>
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
                  // name="nama_obat"
                  // value={nama_obat}
                  // onChange={handleChange(state)}
                  inputProps={{
                    placeholder: "Nama Karyawan ...",
                    value: nicknameValue[idx].name,
                    name: "name",

                    onChange: (e, { newValue, method }) => {
                      console.log(newValue);
                      setNicknameValue(newValue);
                      handleInputVlaueChange(e, idx);
                    },
                  }}
                  highlightFirstSuggestion={true}
                />
              </td>{" "}
              <td className="col-6 socialInput">
                <input
                  type="text"
                  placeholder={`Add New # ${idx + 1}`}
                  value={Social.name}
                  onChange={(e) => handleInputVlaueChange(e, idx)}
                />
              </td>
              <td className="col-2 closingLink">
                <DeleteIcon
                  className="fas fa-fw fa-times"
                  onClick={() => handleRemoveSocial(idx)}
                >
                  remove
                </DeleteIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// function ReactHook() {
//   const [date, setDate] = useState();

//   const [kirimObat, setKirimObat] = useState({
//     nama_obat: "",
//     jumlah: "",
//     tanggal_expired: "",
//   });
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//     reset,
//     control,
//   } = useForm();

//   const [formData, setFormData] = useState({ jumlah: "" });

//   const [isFormInvalid, setIsFormInvalid] = useState(false);
//   const validate = (formData) => {
//     if (formData.jumlah !== "" && formData.jumlah < jumlahValue) {
//       setIsFormInvalid(false);
//     } else {
//       setIsFormInvalid(true);
//     }
//   };
//   const handleFormChange = (event) => {
//     let data = formData;
//     data[event.target.name] = event.target.value;
//     setFormData(data);
//   };
//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (e) {
//       console.log("data OK");
//     }
//   };
//   console.log("formData", formData);
//   // const handleChange = (event) => {
//   //   setKirimObat({
//   //     ...kirimObat,
//   //     [event.target.name]: event.target.value,
//   //   });
//   // };
//   const [rows, setRows] = useState([]);
//   const handleChange = (item) => (e) => {
//     const { name, value } = e.target;
//     // const rows = [...rows];
//     // rows[index] = {
//     //     [name]: value
//     // };
//     let items = rows.map((row) => {
//       if (row.id === item.id) {
//         row[name] = value;
//       }
//       return row;
//     });
//     setRows(items);
//   };
//   const handleAddRow = () => {
//     let item = {
//       id: rows.length + 1,
//       column_1: "",
//       column_2: "",
//     };
//     let state = {
//       id: rows.length + 1,
//       nama_obat: "",
//       cara_pakai: "",
//     };
//     setRows([...rows, item]);
//   };
//   const handleRemoveRow = () => {
//     setRows(rows.slice(0, -1));
//   };
//   const handleRemoveSpecificRow = (item) => () => {
//     // const rows = [...rows];
//     // rows.splice(index, 1);
//     // setRows(rows);
//     let items = rows.filter((row) => row.id != item.id);
//     setRows(items);
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {" "}
//         <button
//           className="newFlyerButton btn mb-4"
//           type="button"
//           onClick={this.handleAddSocial}
//         >
//           <span>
//             <span className="buttonText">ADD NEW</span>
//           </span>
//         </button>
//         {rows.map((item, index) => (
//           <Grid
//             container
//             spacing={1}
//             style={{ marginBottom: "5px", width: "100%" }}
//             // key={list.id}
//             id="addr"
//             key={index}
//           >
//             <td>{item.id}</td>
//             <Grid item sm={4}>
//               {" "}

//             </Grid>{" "}
//             <td>
//               <TextField
//                 type="text"
//                 name="column_2"
//                 value={item.column_2}
//                 onChange={handleChange(item)}
//               />
//             </td>
//             <td>
//               <Button
//                 outline
//                 color="danger"
//                 onClick={handleRemoveSpecificRow(item)}
//               >
//                 Remove
//               </Button>
//             </td>
//           </Grid>
//         ))}{" "}
//         <Button onClick={handleAddRow}>Add Row</Button>
//         <Button color="danger" onClick={handleRemoveRow}>
//           Delete Row
//         </Button>
//         <Grid
//           container
//           spacing={1}
//           style={{ marginBottom: "5px", width: "100%" }}
//           // key={list.id}
//         >
//           <Grid item sm={2}>
//             <TextField
//               variant="outlined"
//               inputProps={{
//                 placeholder: "Email ...",
//                 value: emailValue,
//                 onChange: (emailValue) => {
//                   setEmailValue(emailValue);
//                 },
//               }}
//             />{" "}
//           </Grid>{" "}
//           <Grid item sm={2}>
//             <TextField
//               variant="outlined"
//               inputProps={{
//                 placeholder: "Email ...",
//                 value: alamatValue,
//                 onChange: (alamatValue) => {
//                   setAlamatValue(alamatValue);
//                 },
//               }}
//             />
//           </Grid>{" "}
//           <Grid item sm={2}>
//             <TextField
//               variant="outlined"
//               label="stok"
//               inputProps={{
//                 value: jumlahValue,
//                 onChange: (jumlahValue) => {
//                   setJumlahValue(jumlahValue);
//                 },
//               }}
//             />{" "}
//           </Grid>{" "}
//           <Grid item sm={2}>
//             <br /> {errorJumlah && <div className="error">{errorJumlah}</div>}
//             <TextField
//               variant="outlined"
//               error={isFormInvalid}
//               helperText={isFormInvalid && "Jumlah Melebihi stok / 0"}
//               name="jumlah"
//               label="jumlah"
//               defaultValue={formData.jumlah}
//               onChange={handleFormChange}
//             />
//           </Grid>
//           {/* {errors.jumlah && <p className="danger">{errors.jumlah}</p>} */}
//           <br /> <br />
//           {/* <Grid item sm={5}>
//           <TextField
//             label="Tanggal Expired"
//             margin="dense"
//             variant="outlined"
//             name="tanggal_expired"
//             // required
//             minDate={(new Date().getFullYear() - 18, 11, 31)}
//             onChange={handleChange}
//             value={kirimObat.tanggal_expired}
//             {...register("tanggal_expired", { required: true })}
//             error={errors.tanggal_expired}
//             InputLabelProps={{
//               shrink: true,
//               required: true,
//               validate: (value) => value < 1,
//             }}
//             type="date"
//             style={{ maxWidth: "100%", margin: "0 5px" }}
//             className="text4"
//           />
//           {errors.tanggal_expired?.type === "required" && (
//             <span
//               style={{
//                 fontSize: "9px",
//                 color: "red",
//                 margin: " 10px 0 0 0px",
//               }}
//             >
//               {" "}
//               *Nama Obat Kosong
//             </span>
//           )}
//         </Grid>{" "} */}
//           <br /> <br />
//           <Button
//             type="submit"
//             style={{ background: "red" }}
//             name="search-button"
//             onClick={validate}
//           >
//             Save{" "}
//           </Button>
//         </Grid>
//       </form>
//     </div>
//   );
// }

export default ReactHook;
