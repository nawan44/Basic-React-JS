import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Box,
  TextField,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  Modal,
  Fade,
  Backdrop,
  MenuItem,
  Card,
} from "@material-ui/core";
const Validasi = (props) => {
  const { aksiPemeliharaan, itemPemeliharaan } = props;
  const [isFormInvalid, setIsFormInvalid] = useState();
  const [problem, setProblem] = useState({
    "Koneksi Jaringan": itemPemeliharaan
      ? itemPemeliharaan.check_problem.includes("Koneksi Jaringan")
      : null,
    Hardware: itemPemeliharaan
      ? itemPemeliharaan.check_problem.includes("Hardware")
      : null,
    "Kelistrikan Kendaraan": itemPemeliharaan
      ? itemPemeliharaan.check_problem.includes("Kelistrikan Kendaraan")
      : null,
    Software: itemPemeliharaan
      ? itemPemeliharaan.check_problem.includes("Software")
      : null,
    "Kartu Rusak": itemPemeliharaan
      ? itemPemeliharaan.check_problem.includes("Kartu Rusak")
      : null,
    "Lain-lain": itemPemeliharaan
      ? itemPemeliharaan.check_problem.includes("Lain-lain")
      : null,
  });
  const isDisabled = () => {
    if (aksiPemeliharaan === "lihatData") {
      return true;
    } else {
      return false;
    }
  };
  const handleChangeProblem = (event) => {
    setProblem({ ...problem, [event.target.name]: event.target.checked });
  };
  const countCheckProblem = () => {
    let aa = 0;
    Object.values(problem).forEach((r) => {
      if (r) aa += 1;
    });
    return aa;
  };
  const validate = (namaValue) => {
    if (countCheckProblem() > 0) {
      setIsFormInvalid(false);
    } else {
      setIsFormInvalid(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("ok");
    } else {
      console.log("false");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Validasi
        <Grid item xs={12} spacing={2}>
          <Card className="card-input">
            <FormLabel component="legend" className="form-label">
              Check Problem{" "}
            </FormLabel>

            <FormGroup
              row
              className="checkbox-container"
              style={{ margin: "0 auto", textAlign: "center" }}
              name="problemCek"
            >
              {" "}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={problem["Koneksi Jaringan"]}
                    onChange={handleChangeProblem}
                    name="Koneksi Jaringan"
                    disabled={isDisabled()}
                  />
                }
                className="checkStyle"
                label="Koneksi Jaringan"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={problem.Hardware}
                    onChange={handleChangeProblem}
                    name="Hardware"
                    disabled={isDisabled()}
                  />
                }
                label="Hardware"
                className="checkStyle"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={problem["Kelistrikan Kendaraan"]}
                    onChange={handleChangeProblem}
                    name="Kelistrikan Kendaraan"
                    disabled={isDisabled()}
                  />
                }
                label="Kelistrikan Kendaraan"
                className="checkStyle"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={problem["Software"]}
                    onChange={handleChangeProblem}
                    name="Software"
                    disabled={isDisabled()}
                  />
                }
                label="Software"
                className="checkStyle"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={problem["Kartu Rusak"]}
                    onChange={handleChangeProblem}
                    disabled={isDisabled()}
                    name="Kartu Rusak"
                  />
                }
                label="Kartu Rusak"
                className="checkStyle"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={problem["Lain-lain"]}
                    onChange={handleChangeProblem}
                    name="Lain-lain"
                    disabled={isDisabled()}
                  />
                }
                label="Lain-lain"
                className="checkStyle"
              />
            </FormGroup>
          </Card>
          {isFormInvalid && (
            <span
              style={{ fontSize: "9px", color: "red", margin: " 0 0 0 15px" }}
            >
              {" "}
              * Pilih salah satu
            </span>
          )}
        </Grid>
        <Grid item xs={12} spacing={2}>
          <Box component="span">
            <Button
              color="primary"
              type="submit"
              className="button-input-list "
              variant="outlined"
            >
              Kirim{" "}
            </Button>
          </Box>
        </Grid>
      </form>
    </div>
  );
};
export default Validasi;
