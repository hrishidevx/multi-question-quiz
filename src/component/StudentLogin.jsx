import { zodResolver } from "@hookform/resolvers/zod";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { LoginSchema } from "../services/ZodSchema";
import { apiRequest } from "../services/api";
import "./Auth.css";

function StudentLogin() {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: { username: "", password: "" },
  });
  const onSubmit = async (data) => {
    // e.preventdefault();
    try {
      const res = await apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const response = await res.json();
      const accessToken = response.access_token || response.data?.access_token;
      if (!res.ok || response.error || !accessToken) {
        throw new Error(
          response?.error || "Unable to sign in. Please try again.",
        );
      }
      localStorage.setItem("token", accessToken);
      window.dispatchEvent(new Event("authchange"));
      Navigate("/Quiz");
    } catch (e) {
      alert(e.message || "Unable to sign in. Please try again.");
    }
  };
  const handleSignup = () => {
    // e.preventdefault();
    Navigate("/Signup");
  };
  return (
    <div className="auth-page student-auth">
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <button className="auth-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting && (
            <span className="button-spinner" aria-hidden="true" />
          )}
          {isSubmitting ? "Signing in..." : "Submit"}
        </button>
      </form>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default StudentLogin;
