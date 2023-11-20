import { TypeOf, object, string } from "zod";

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is Required",
    }),
    password: string({
      required_error: "Password is Required",
    }).min(8, "Password Too Short - should be of 8 characters"),
    confirmPassword: string({
      required_error: "password confirmation is required",
    }),
    email: string({
      required_error: "Email is Required",
    }).email("Email is Not Valid"),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.confirmPassword"
>;
