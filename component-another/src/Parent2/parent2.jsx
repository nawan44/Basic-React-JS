import React, { useState, useEffect } from "react";
import Child1Parent2 from "./Child1/child1Parent1";
import Child2Parent2 from "./Child2/child2Parent1";
import { TextField, Button } from "@material-ui/core";
import "../App.css";
export default function Parent2() {
  const handleSubmitParent2 = () => {
    console.log("handleSubmitParent2");
  };
  return (
    <div>
      <form onSubmit={handleSubmitParent2}>
        {/* <TextField
          variant="outlined"
          name="parent2"
          // value="child2parent2"
          label=" Parent2"
          style={{ margin: "5px 0" }}
        />{" "}
        <br />
        <Button type="submit" variant="contained" color="primary">
          Parent 2
        </Button> */}
        <br />
        {/* <Child1Parent2 /> */}
        <Child2Parent2 />
      </form>
    </div>
  );
}
