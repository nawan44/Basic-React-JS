import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";

export default function Child1Parent2() {
  const handleSubmitChild1Parent2 = () => {
    console.log("handleSubmitChild2Parent2");
  };
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmitChild1Parent2}>
        <TextField
          variant="outlined"
          name="child1parent2"
          // value="child2parent2"
          label="Child1 Parent2"
          style={{ margin: "5px 0" }}
        />{" "}
        <br />
        <Button type="submit" variant="contained" color="secondary">
          Child 1 Parent 2
        </Button>
      </form>
    </div>
  );
}
