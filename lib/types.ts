export interface PotType {
    id: number; // Corresponds to "int4"
    user_id: string; // UUID
    name: string; // VARCHAR
    target_amount: number; // NUMERIC
    current_amount: number; // NUMERIC
    created_at: string; // TIMESTAMP (ISO 8601 string for datetime)
    completed: boolean; // BOOL
  }