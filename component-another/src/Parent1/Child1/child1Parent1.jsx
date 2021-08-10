import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";

export default function Child1Parent1() {
  const handleSubmitChild1Parent1 = () => {
    console.log("handleSubmitChild2Parent2");
  };
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmitChild1Parent1}>
        <TextField
          variant="outlined"
          name="child1parent1"
          // value="child2parent2"
          label="Child1 Parent1"
          style={{ margin: "5px 0" }}
        />{" "}
        <br />
        <Button type="submit" variant="contained" color="secondary">
          Child 1 Parent 1
        </Button>
      </form>
    </div>
  );
}
