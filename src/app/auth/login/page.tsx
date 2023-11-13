'use client';
import React, { useState } from 'react';
import { signIn } from "next-auth/react"
import config from "@/config";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "", password: ""
  });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user types
  }

  const validate = () => {
    let isValid = true;
    let errors = { email: "", password: "" };

    if (!credentials.email) {
      isValid = false;
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      isValid = false;
      errors.email = "Email is invalid.";
    }

    if (!credentials.password) {
      isValid = false;
      errors.password = "Password is required.";
    }

    setErrors(errors);
    return isValid;
  }

  const handleSubmit = async () => {
    if (validate()) {
      try {
        await signIn("superuser-login", {
          email: credentials.email,
          password: credentials.password,
          callbackUrl: `${window.location.origin}${config.defaultPath}`
        })
      } catch (error) {
        console.log("Error", error)
      }
    }
  }

  return (
    <section>
      <div className="w-full flex justify-center items-center px-5 mt-20">
        <div className="p-[24px] w-full sm:w-[360px] h-[411px] shrink-0 border border-[#999] rounded-[8px] flex flex-col justify-center items-center">
          <div className="mb-[24px] text-[24px] font-[600] leading-[130%] w-full">Admin Login</div>
          <div className="w-full mb-[24px]">
            <input type="email" placeholder="Email" value={credentials.email} name={"email"} onChange={onChange}
              className="py-[15px] ps-[16px] w-full border border-[#999] rounded-[4px]" />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="w-full mb-[32px]">
            <input type="password" placeholder="Password" value={credentials.password} name={"password"}
              onChange={onChange}
              className="py-[15px] ps-[16px] w-full border border-[#999] rounded-[4px]" />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          <button type={'button'} onClick={handleSubmit}
            className="w-full bg-[#0F3744] pt-[14px] pb-[13px] text-center border rounded-[4px] text-[#FFF] text-[16px] font-[500] leading-[130%]">Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
