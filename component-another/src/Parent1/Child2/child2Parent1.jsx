import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";

export default function Child2Parent1() {
  const handleSubmitChild2Parent1 = () => {
    console.log("handleSubmitChild2Parent2");
  };
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmitChild2Parent1}>
        <TextField
          variant="outlined"
          name="child2parent1"
          // value="child2parent2"
          label="Child2 Parent1"
          style={{ margin: "5px 0" }}
        />
        <br />
        <Button type="submit" variant="contained" color="secondary">
          Child 2 Parent 1
        </Button>
      </form>
    </div>
  );
}
