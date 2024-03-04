import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { authProp } from "../authAlertBox";

const formschema = z.object({
  email: z.string().email(),
});

const Forgot = ({
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
        <h3 className=" text-2xl font-bold">Forgot Password</h3>
        <p className=" text-neutral-600 text-sm">
          We would help you reset your password
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((value) => console.log(value))}
          className=" mt-4 space-y-4"
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
          <Button className=" w-full">Confirm</Button>
        </form>
      </Form>
      <div className=" text-sm flex mt-3 items-center space-x-2 font-semibold justify-center">
        <p>Do you remember?</p>
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

export default Forgot;
