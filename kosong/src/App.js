import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { TextField } from "@material-ui/core";
import moment from "moment";
var ageCalculator = require("age-calculator");
let { AgeFromDateString, AgeFromDate } = require("age-calculator");

function App() {
  const [dem_pat_birthyear, setCekUmur] = useState();

  let ageFromDate = new AgeFromDate(new Date(1987, 0, 8)).age;
  console.log("value from AgeFromDate", ageFromDate);

  // var a = moment();
  // var b = moment({dem_pat_birthyear}, "MM-YYYY");
  // var age = moment.duration(a.diff(b));
  // var years = age.years();
  // var months = age.months();
  // console.log("The age is " + years + " years " + months + " months ");
  return (
    <div className="App">
      {" "}
      <TextField
        id="outlined-basic"
        label="Tanggal sekarang"
        variant="outlined"
        name="tanggalSekarang"
        type="date"
        InputLabelProps={{ shrink: true, required: true }}
        // defaultValue={moment().format("YYYY-MM-DD")}
        // defaultValue={moment("1995-12-25").format("YYYY-MM-DD")}
        value={dem_pat_birthyear}
      />
      <TextField
        id="outlined-basic"
        label="Umur"
        variant="outlined"
        InputLabelProps={{ shrink: true, required: true }}
        value={ageFromDate}
      />
    </div>
  );
}

export default App;
