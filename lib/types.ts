export interface PotType {
    id: number; // Corresponds to "int4"
    user_id: string; // UUID
    name: string; // VARCHAR
    target_amount: number; // NUMERIC
    current_amount: null | number; // NUMERIC
    created_at: string; // TIMESTAMP (ISO 8601 string for datetime)
    completed: boolean; // BOOL
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
  