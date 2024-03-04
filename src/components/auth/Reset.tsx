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

const formschema = z
  .object({
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

const Reset = () => {
  const form = useForm<z.infer<typeof formschema>>({
    resolver: zodResolver(formschema),
  });

  return (
    <>
      <div>
        <h3 className=" font-bold text-2xl">Reset Your Password</h3>
        <p className=" text-neutral-600 text-sm">
          Please enter reset your new password!
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
            <Button size={"sm"} className=" w-full">
              Reset Password
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default Reset;
