import React, { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";

export const FormWithCustomHook = () => {
  const [formData, handlerChange] = useForm({
    user: "",
    email: "",
    password: "",
  });
  const { user, email, password } = formData;

  useEffect(() => {
    console.log("Inicio el componente");
  }, []);


  return (
    <>
      <h1>SimpleForm Login</h1>
      <h3>Su nombre tiene {user.length} letras</h3>
      <div className="container">
        <input
          type="text"
          name="user"
          placeholder="write here"
          className="form-control"
          value={user}
          onChange={handlerChange}
        />

        <input
          type="email"
          name="email"
          placeholder=""
          value={email}
          className="form-control mt-2"
          onChange={handlerChange}
        />

        <input
          type="password"
          name="password"
          placeholder="*******"
          value={password}
          className="form-control mt-2"
          onChange={handlerChange}
        />
      </div>
    </>
  );
};
