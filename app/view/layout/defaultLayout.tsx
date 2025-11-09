import { Outlet } from "react-router";
import Header from "../container/header/header";

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}