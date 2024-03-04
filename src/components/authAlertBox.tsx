import { ReactNode, useState } from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
} from "./ui/alert-dialog";
import Login from "./auth/Login";
import { X } from "lucide-react";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";
import Register from "./auth/Register";
import Forgot from "./auth/Forgot";
import Reset from "./auth/Reset";

export type authProp = "login" | "register" | "forgot" | "reset";

const AuthAlertBox = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [authName, setAuthName] = useState<authProp>("login");
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent className=" md:w-[450px]">
        <div className=" relative">
          <AlertDialogCancel
            onClick={() => setAuthName("login")}
            className=" absolute top-0 right-0"
          >
            <X size={18} />
          </AlertDialogCancel>
          {authName === "login" && <Login setAuthName={setAuthName} />}
          {authName === "register" && <Register setAuthName={setAuthName} />}
          {authName === "forgot" && <Forgot setAuthName={setAuthName} />}
          {authName === "reset" && <Reset />}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AuthAlertBox;
