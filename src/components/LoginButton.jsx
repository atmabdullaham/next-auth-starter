"use client";
import { signIn } from "next-auth/react";
const LoginButton = () => {
  return (
    <button className="btn" onClick={() => signIn()}>
      Sign in
    </button>
  );
};

export default LoginButton;
