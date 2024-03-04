import axios from "@/api/axios";
import { loginProp, registerProp } from "./typed";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";

const register = async (payload: registerProp) => {
  const { data } = await axios.post("register", payload);
  return data;
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (payload: registerProp) => register(payload),
    onSuccess: () => {
      toast.success("Register Successfully!");
    },
    onError : (data : AxiosError) => {
      console.log(data);
      toast.error("Register fail")
      
    }
  });
};

const login = async (payload: loginProp) => {
  const { data } = await axios.post("login", payload);
  return data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn : (payload : loginProp) => login(payload),
    onSuccess : () => {
      toast.success("Login Successfully!")
    },
    onError : () => {
      toast.error("Login fail!")
    }
  })
}
