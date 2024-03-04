import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { authProp } from "../authAlertBox";
import { useRegister } from "@/store/server/auth/mutation";

const formschema = z
  .object({
    username: z.string().min(1, { message: "Username required" }),
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: "Password must ba at least 6 length" }),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "password does not match!",
    path: ["password_confirmation"],
  });

const Register = ({
  setAuthName,
}: {
  setAuthName: React.Dispatch<React.SetStateAction<authProp>>;
}) => {
  const form = useForm<z.infer<typeof formschema>>({
    resolver: zodResolver(formschema),
    defaultValues : {
      username : "",
      email : "",
      password : "",
      password_confirmation : ""
    }
  });

  const register = useRegister();

  return (
    <>
      <div>
        <h3 className=" font-bold text-2xl">Create Your Account</h3>
        <p className=" text-neutral-600 text-sm">Welcome!</p>
      </div>
      <Form {...form}>
        <form
          className=" space-y-3 mt-4"
          onSubmit={form.handleSubmit((value) =>
            register.mutate(value, {
              onSuccess: () => setAuthName("login"),
            })
          )}
          action=""
        >
          <FormField
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usernaem</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="example@gmail.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    {...field}
                    placeholder="example@gmail.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="current_password"
                    type="password"
                    {...field}
                    placeholder="xxxxxxxx"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password_confirmation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password Confirm</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="current_password"
                    type="password"
                    {...field}
                    placeholder="xxxxxxxx"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className=" pt-2">
            <Button
              disabled={register.isPending}
              size={"sm"}
              className=" w-full"
            >
              Create account
            </Button>
          </div>
        </form>
      </Form>
      <div className=" text-sm flex mt-3 items-center space-x-2 font-semibold justify-center">
        <p>Alread account have?</p>
        <a
          onClick={() => setAuthName("login")}
          className=" cursor-pointer text-pink"
        >
          Log in
        </a>
      </div>
    </>
  );
};

export default Register;
