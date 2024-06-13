import { signIn } from "../../auth";
import Image from "next/image";

export default function SignInButton() {
  return (
    <>
      <form
        className={"py-5"}
        action={async () => {
          "use server";
          await signIn("github", { redirectTo: "/profile" });
        }}
      >
        <button className={"flex w-full justify-center gap-x-4 rounded-md bg-black py-[11px] pl-2 align-top text-[16px] font-bold leading-[150%] text-white"} type="submit">
          <Image className={""} src={"/images/icon-github.svg"} alt={"Github"} width={20} height={20} />
          <span className={"pl-[8px] leading-[150%] text-white"}>Login with GitHub</span>
        </button>
      </form>
    </>
  );
}
