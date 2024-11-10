export type Status = "pending" | "in progress" | "completed";

export interface Todo {
  id: string;
  title: string;
  description: string;
  status: Status;
}
