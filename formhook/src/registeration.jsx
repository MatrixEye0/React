import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// YUP validation
const schema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),

  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
 
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"), 

  age: yup
    .number()
    .typeError("Age must be a number")
    .required("Age is required")
    .min(18, "Age must be at least 18"),
});

function Register() {

  // useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div>
        <input  type="text"  {...register("name")}  placeholder="Enter your name" />
         {errors.name && ( <p>{errors.name.message}</p> )}
      </div>

   
      <div>
        <input type="email" {...register("email")} placeholder="Enter your email" />
          {errors.email && ( <p>{errors.email.message}</p> )}
      </div>

       <div>
        <input  type="number"  {...register("age")}  placeholder="Enter age" />
         {errors.age && ( <p>{errors.age.message}</p> )}
      </div>

      <div>
        <input type="password" {...register("password")} placeholder="Enter password"  />
        {errors.password && ( <p>{errors.password.message}</p>  )}
      </div>
      <div>
        <input type="confirmpassword" {...register("confirmpassword")} placeholder="Confirm password"  />
        {errors.password && ( <p>{errors.confirmpassword.message}</p>  )}
      </div>

      <button type="submit"> Register </button>

    </form>
  );
}

export default Register;