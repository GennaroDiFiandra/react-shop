import PocketBase from "pocketbase";

export const db = new PocketBase(import.meta.env.VITE_POCKET_BASE_URL);