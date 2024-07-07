import Image from "next/image";
import Input from "@/components/Input";
import SignInButton from "@/components/SignInButton";
import { signIn } from "../../../auth";

export default function LoginPage() {
  return (
    <div className={"w-[375px] border p-8 font-instrumentSans antialiased"}>
      <Image src="/images/logo-devlinks-large.svg" alt="Logo" width={182.5} height={40} />
      <div className={"space-y-[8px] pt-[64px]"}>
        <h2 className={"text-left align-top text-[24px] font-bold leading-[150%] text-dark-gray"}>Login</h2>
        <p className={"text-[15.9px] leading-[150%] text-gray"}>Add your details below to get back into the app</p>
      </div>

      <SignInButton />

      <h3 className="flex items-center gap-3 text-3xl tracking-wide text-gray before:h-px before:flex-1 before:bg-gray after:h-px after:flex-1 after:bg-gray">OR</h3>

      <form
        className={"pt-[40px]"}
        action={async (formData) => {
          "use server";
          await signIn("credentials", formData);
        }}
      >
        <div className={"space-y-[24px]"}>
          <Input label="Email address" iconPath="/images/icon-email.svg" type="email" name="email" placeholder="e.g. alex@email.com" />
          <Input label="Password" iconPath="/images/icon-password.svg" type="password" name="password" placeholder="Enter your password" />
          <button className={"w-full rounded-md bg-purple px-[27px] py-[11px] align-top text-[16px] font-bold leading-[150%] text-white"} type="submit">
            Login
          </button>
          <div className={"text-center text-[16px] leading-[150%]"}>
            <p className={"text-gray"}>Don't have an account?</p>
            <a className={"text-purple"} href="/register">
              Create account
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
