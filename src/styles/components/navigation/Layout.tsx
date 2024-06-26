import React from "react";
import Navbar from "./navigation"

const Layout = ({ children }: any) => {
    return (
        <>
        <Navbar />
        <main>{children}</main>
        </>
    )
}

export default Layout;