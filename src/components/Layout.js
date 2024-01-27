import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";

export default function Layout() {
    return <div className="m-8 h-screen">
        <Header />
        <Navigation />
        <Outlet />
    </div>
}