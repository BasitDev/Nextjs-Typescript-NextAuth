"use client";
import React from "react";
import GuestGuard from "@/utils/route-guards/GuestGuard";

const AuthLayout = ({ children }: any) => {
  return (
    <GuestGuard>
      <div className="h-[100vh] flex flex-col justify-between">
        {children}
      </div>
    </GuestGuard>
  );
};

export default AuthLayout;
