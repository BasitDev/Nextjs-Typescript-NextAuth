"use client"
import React, { useState } from "react";
// import VerticalNavbar from "@/components/Dashboard/VerticalNavbar";
import Image from "next/image";
// import Menu from "@/assets/images/MenuBars.png";
// import User from "@/components/Dashboard/User";
import AuthGuard from "@/utils/route-guards/AuthGuard";
import Navbar from "@/components/Navbar";

const DashboardLayout = ({ children }) => {

    return (
        <AuthGuard>
            {/* <Navbar /> */}
            <div className="flex">
                {children}
            </div>
        </AuthGuard>
    );
};

export default DashboardLayout;
