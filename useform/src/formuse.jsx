import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
export default function Rahmat() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [aku, akuSet] = useState("");
  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <TextField
        defaultValue="test"
        {...register("example")}
        error={errors.nama_user}
      />
      <br />
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("firstName", { required: true })} />
      {errors.firstName?.type === "required" && "First name is required"}
      <br />
      <TextField
        defaultValue="test"
        {...register("example")}
        error={errors.nama_user}
      />
      <br />
      {/* include validation with required or other standard HTML validation rules */}
      <TextField
        variant="outlined"
        {...register("firstName", { required: true })}
      />
      {errors.firstName?.type === "required" && (
        <span style={{ color: "red" }}>This field is required</span>
      )}
      <br />
      <TextField
        defaultValue="test"
        {...register("example")}
        error={errors.nama_user}
      />
      <br />
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("lastName", { required: true })} />
      {errors.lastName?.type === "required" && "Last name is required"}
      <br />
      <input type="submit" />
    </form>
  );
}
