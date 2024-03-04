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

const formschema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must ba at least 6 length" }),
});

const Login = ({
  setAuthName,
}: {
  setAuthName: React.Dispatch<React.SetStateAction<authProp>>;
}) => {
  const form = useForm<z.infer<typeof formschema>>({
    resolver: zodResolver(formschema),
  });

  return (
    <>
      <div>
        <h3 className=" font-bold text-2xl">Login</h3>
        <p className=" text-neutral-600 text-sm">
          See your grwoth and get consulting support!
        </p>
      </div>
      <Form {...form}>
        <form
          className=" space-y-3 mt-4"
          onSubmit={form.handleSubmit((value) => console.log(value))}
          action=""
        >
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
          <div className=" text-end mt-2">
            <a
              onClick={() => setAuthName("forgot")}
              className=" font-semibold cursor-pointer text-sm"
            >
              Forgot password?
            </a>
          </div>
          <div className=" pt-2">
            <Button size={"sm"} className=" w-full">
              Log in
            </Button>
          </div>
        </form>
      </Form>
      <div className=" text-sm flex mt-3 items-center space-x-2 font-semibold justify-center">
        <p>Not Register yet?</p>
        <a
          onClick={() => setAuthName("register")}
          className=" cursor-pointer text-pink"
        >
          Create Account
        </a>
      </div>
    </>
  );
};

export default Login;
