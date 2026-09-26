import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignupSchema } from "../services/ZodSchema";
import { useNavigate } from "react-router";
import "./Auth.css";

function Signup() {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignupSchema),
    defaultValues: { name: [], username: [], email: [], password: [] },
  });
  const onSubmit = async (data) => {
    // e.preventdefault();
    try {
      const response = await fetch(
        "https://playground.nileslabs.com/api/v1/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data }),
        },
      );
      const res = await response.json();
      console.log(res);
      if (!res.error) {
        // localStorage.setItem("token", res.access_token || "");
        Navigate("/Login");
      } else {
        alert(res?.error || "Something went wrong");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="auth-page signup-auth">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="name">
          Name ={" "}
          <input
            type="text"
            {...register("name")}
            placeholder="Enter your name "
          />
          {errors.name ? errors.name.message : null}
        </div>

        <div className="username">
          Username ={" "}
          <input
            type="text"
            {...register("username")}
            placeholder="Enter your Username"
          />
          {errors.username ? errors.username.message : null}
        </div>
        <div className="email">
          Email-Id ={" "}
          <input
            type="email"
            {...register("email")}
            placeholder="Enter your Email"
          />
          {errors.email ? errors.email.message : null}
        </div>
        <div className="password">
          Password ={" "}
          <input
            type="password"
            {...register("password")}
            placeholder="Enter a Password"
          />
          {errors.password ? errors.password.message : null}
        </div>
        <div className="confirmpassword">
          confirm Password ={" "}
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Enter a Password"
          />
          {errors.confirmPassword ? errors.confirmPassword.message : null}
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
