import { Order } from "@/models/";
import { db } from "@/services/";

export async function createOrder(order:Partial<Order>) {
  return db.collection('orders').create(order);
}