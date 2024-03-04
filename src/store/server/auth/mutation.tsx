import axios from "@/api/axios";
import { registerProp } from "./typed";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const register = async (payload: registerProp) => {
  const { data } = await axios.post("register", payload);
  return data;
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (payload: registerProp) => register(payload),
    onSuccess : () => {
        toast.success("Register Successfully!")
    }
  });
};
