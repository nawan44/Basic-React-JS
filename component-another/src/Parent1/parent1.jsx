import React, { useState, useEffect } from "react";
import Child1Parent1 from "./Child1/child1Parent1";
import Child2Parent1 from "./Child2/child2Parent1";
import { TextField, Button, Typography } from "@material-ui/core";

export default function Parent1() {
  const handleSubmitParent1 = () => {
    console.log("handleSubmitChild2Parent2");
  };
  return (
    <div>
      <form onSubmit={handleSubmitParent1}>
        <Typography>Parent 1</Typography>
        {/* <TextField
          variant="outlined"
          name="parent1"
          // value="child2parent2"
          label="Parent 1"
          style={{ margin: "5px 0" }}
        />{" "}
        <br />
        <Button type="submit" variant="contained" color="primary">
          Parent 1
        </Button>{" "} */}
        <br />
        <Child1Parent1 />
        {/* <Child2Parent1 /> */}
      </form>
    </div>
  );
}
