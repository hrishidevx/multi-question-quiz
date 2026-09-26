import { zodResolver } from "@hookform/resolvers/zod";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { LoginSchema } from "../services/ZodSchema";
import "./Auth.css";

function StudentLogin() {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: { username: "", password: "" },
  });
  const onSubmit = async (data) => {
    // e.preventdefault();
    try {
      const res = await fetch(
        "https://playground.nileslabs.com/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Playground-Identity": "df9ee9b9-52a7-4e7c-a325-de21989d0a85",
          },
          body: JSON.stringify({ ...data }),
        },
      );
      const response = await res.json();
      console.log(response);
      if (!response.error) {
        localStorage.setItem("token", response.access_token || "");
        window.dispatchEvent(new Event("authchange"));
        Navigate("/Quiz");
      } else {
        alert(response?.error || "something went wrong");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleSignup = () => {
    // e.preventdefault();
    Navigate("/Signup");
  };
  return (
    <div className="auth-page student-auth">
      <h2>Student Login</h2>
      <form>
        <h2>
          Username <b>:</b>{" "}
          <input
            type="text"
            name="Username"
            {...register("username")}
            placeholder="Enter username"
          />
          {errors.username ? errors.username.message : null}
        </h2>
        <h2>
          Password<b>:</b>{" "}
          <input
            type="password"
            name="password"
            {...register("password")}
            placeholder="Enter Password"
          />
          {errors.password ? errors.password.message : null}
        </h2>

        <button onClick={handleSubmit(onSubmit)}>Submit</button>
      </form>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default StudentLogin;
