import React, { useState, createContext } from "react";

export type User = {

};

export type UserContextProps = {
    user: User | null;
    setUser: (user: User) => void;
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);

export type UserProviderProps = {
    children: React.ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}