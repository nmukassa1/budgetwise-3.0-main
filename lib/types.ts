export interface PotType {
  id: number; // Corresponds to "int4"
  user_id: string; // UUID
  name: string; // VARCHAR
  target_amount: number; // NUMERIC
  current_amount: null | number; // NUMERIC
  created_at: string; // TIMESTAMP (ISO 8601 string for datetime)
  completed: boolean; // BOOL
}

export interface PotFormType {
  name: string;
  target_amount?: string | number;
}
export interface NewBudgetFormType {
  name: string;
  budget_amount?: string | number;
}

export interface TransactionFormType {
  name: string;
  amount: string | number;
  repeat: string;
  category_type: string;
  pot_id: number;
  transaction_date: string;
}

export interface TransactionType{
    id: number;
    user_id: string;
    name: string;
    amount: number;
    category_type: string;
    is_recurring: boolean;
    transaction_date: string;
    created_at: string;
}; // Array of transaction objects

export interface BudgetType {
  id: number; 
  user_id: string; 
  name: string; 
  budget_amount: number; 
  currently_transacted?: number; 
  createdAt?: Date; 
}


export interface potTransaction {
  name: string,
  amount: string,
  repeat: boolean,
  potId: number,
}


export interface SuccessFetch{
  status: "success",
  message: string,
  data: object,
}

export interface ErrorFetch{
  status: "error",
  message: string,
  data: object,
}