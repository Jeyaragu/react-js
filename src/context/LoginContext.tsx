import { createContext, useState, ReactNode } from 'react';

type LoginContextType = {
    userId: number | null;
    setUserId: (id: number | null) => void;
};

export const LoginContext = createContext<LoginContextType>({
    userId: null,
    setUserId: () => {},
});

export const LoginProvider = ({ children }: { children: ReactNode }) => {
    const [userId, setUserId] = useState<number | null>(null);

    return (
        <LoginContext.Provider value={{ userId, setUserId }}>
            {children}
        </LoginContext.Provider>
    );
};
