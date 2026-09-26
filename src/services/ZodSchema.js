import z from "zod";

const emailSchema = z
  .string()
  .min(8, "Enter a valid email")
  .regex(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    "Enter a valid Email",
  );
const passwordSchema = z
  .string()
  .min(8, "Enter password must be contain 8 character")
  .regex(/[A-Z]/, "Must be one Capital Character");
const confirmPasswordSchema = z.string();
export const LoginSchema = z.object({
  username: z.string(),
  password: z.string(),
});
export const SignupSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: confirmPasswordSchema,
    username: z.string().min(6, "required minimum 6 character"),
    name: z.string().min(3, "required minimum 3 characters"),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password != confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Confirm Password not Match",
        path: ["confirmPassword"],
      });
    }
  });
