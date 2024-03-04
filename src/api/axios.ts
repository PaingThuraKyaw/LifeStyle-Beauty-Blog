import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export default axios.create({ baseURL: import.meta.env.VITE_BASE_URL });

export const queryClient = new QueryClient();

export const authJsonHeader = (file?: boolean) => ({
  "Content-Type": file ? "multipart/form-data" : "Application/json",
  Accept : "Application/json",
  Authorization : `Bearer `
});
