import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define interfaces for types
interface BudgetItem {
    amount: number;
    name: string;
}

interface UserBudget {
    income: BudgetItem[];
    expenses: BudgetItem[];
    savings: BudgetItem[];
    debt: BudgetItem[];
}

interface UserContextType {
    userBudget: UserBudget;
    setUserBudget: (budget: UserBudget) => void;
}

// Create a context
const UserContext = createContext<UserContextType>({
    userBudget: {
        income: [],
        expenses: [],
        savings: [],
        debt: [],
    },
    setUserBudget: () => {}
});


interface UserProviderProps {
    children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
    const [userBudget, setUserBudget] = useState<UserBudget>(
        {
            income: [{name: 'Salary', amount: 5000}],
            expenses: [{name: 'Rent', amount: 1000}],
            savings: [{name: 'Emergency Fund', amount: 1000}],
            debt: [],
        }
    )

    return (
        <UserContext.Provider value={{ userBudget, setUserBudget }}>
            {children}
        </UserContext.Provider>
    );
}

// Custom hook to use the UserContext
export function useUserContext() {
    return useContext(UserContext);
}