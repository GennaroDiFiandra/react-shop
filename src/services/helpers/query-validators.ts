import { Order, User } from "@/models/";
import { createOrder, createUser } from "@/services/";

export async function createUserHandler(customer:Partial<User>): Promise<Partial<User>|any> {
  try {
    return await createUser(customer);
  }
  catch(error) {
    return error;
  }
}

export async function createOrderHandler(order:Partial<Order>): Promise<Partial<User>|any> {
  try {
    return await createOrder(order);
  }
  catch(error) {
    return error;
  }
}