import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export default axios.create({ baseURL: import.meta.env.VITE_BASE_URL });


export const queryClient = new QueryClient();
