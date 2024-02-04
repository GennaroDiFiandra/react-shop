import { User } from "@/models/";
import { db } from "@/services/";

// for all users
export function logout() {
  db.authStore.clear();
}

export function checkIsLoggedIn() {
  return db.authStore.isValid;
}

export function getToken() {
  return db.authStore.token;
}

// for admins
export function adminLogin( email:string, password:string ) {
  return db.admins.authWithPassword(email, password);
}

// for users but admins
export function login( email:string, password:string ) {
  return db.collection('users').authWithPassword(email, password);
}

export async function createUser(user:Partial<User>) {
  return db.collection('users').create(user);
}