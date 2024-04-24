import React, { useContext } from "react";
import { UserContext } from "./context/user-context";
import { Route, Navigate, Outlet } from 'react-router-dom'

export type PrivateRouteProps = {
    Children: React.ReactNode;
    redirectTo: string;
}

export function PrivateRoute() {
    const { user } = useContext(UserContext);

    if (!user) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}