import Image from "next/image";
import Input from "@/components/Input";
import { registerUser } from "@/components/actions";
import { useActionState } from "react";
import { useFormStatus, useFormState } from "react-dom";
const initialState = {
  message: "",
  success: false,
};

export default function RegisterPage() {
  return (
    <div className={"w-[375px] border p-8 font-instrumentSans antialiased"}>
      <Image src="/images/logo-devlinks-large.svg" alt="Logo" width={182.5} height={40} />
      <div className={"space-y-[8px] pt-[64px]"}>
        <h2 className={"text-left align-top text-[24px] font-bold leading-[150%] text-dark-gray"}>Create account</h2>
        <p className={"text-[15.9px] leading-[150%] text-gray"}>Let's get you started sharing your links!</p>
      </div>

      <form
        className={"pt-[40px]"}
        action={async (formData) => {
          "use server";
          const user = {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
          };

          await registerUser(user);
        }}
      >
        <div className={"space-y-[24px]"}>
          <Input label="Email address" iconPath="/images/icon-email.svg" type="email" name="email" placeholder="e.g. alex@email.com" />
          <Input label="Create password" iconPath="/images/icon-password.svg" type="password" placeholder="At least 8 characters" />
          <Input label="Confirm password" iconPath="/images/icon-password.svg" type="password" name="password" placeholder="Enter your password" />
          <p className={"text-[12px] leading-[150%] text-gray"}>Password must contain at least 8 characters</p>
          <button className={"w-full rounded-md bg-purple px-[27px] py-[11px] align-top text-[16px] font-bold leading-[150%] text-white"} type="submit">
            Create new account
          </button>
          <div className={"text-center text-[16px] leading-[150%]"}>
            <p className={"text-gray"}>Already have an account?</p>
            <a className={"text-purple"} href="/login">
              Login
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
