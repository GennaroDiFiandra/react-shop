export interface Order {
  id: string;
  cartItems: string;
  total: number;
  userId: string;
  status: "submitted" | "processing" | "completed";
  code: number;
  message: string;
}