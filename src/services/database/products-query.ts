import { Product } from "@/models/";
import { db } from "@/services/";

export async function getAllProducts()  {
  return db.collection('products').getFullList<Product>({ sort: '-created', });
}

export async function createProduct(product:Partial<Product>) {
  return db.collection('products').create(product);
}

export async function updateProduct(product:Partial<Product>) {
  return db.collection('products').update(product.id!, product);
}