export interface User {
  rowid: string;
  email: string;
  user_name: string;
  password_hash: string;
  user_surname: string;
  created_at?: string;
  updated_at?: string;
}
