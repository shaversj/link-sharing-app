import Image from "next/image";
import Input from "@/components/Input";
import Header from "@/components/Header";
import { auth } from "../../../auth";

export default async function Details() {
  const session = await auth();
  if (!session?.user) return <div>Not authenticated</div>;

  return (
    <div>
      <Header activePage={"profile"} userId={session.user.id} />
      <div className={"mt-4 px-4 antialiased"}>
        <div className={"rounded-md bg-white px-6 pb-6"}>
          <div className={"space-y-[0.5rem] pt-[4rem]"}>
            <h2 className={"text-left align-top text-[1.5rem] font-bold leading-[150%] text-dark-gray"}>Profile Details</h2>
            <p className={"text-[0.994rem] leading-[150%] text-gray"}>Add your details to create a personal touch to your profile.</p>
          </div>
          <div className={"mt-[2.5rem] rounded-lg bg-gray-light"}>
            <div className={"p-5"}>
              <p className={"text-gray"}>Profile picture</p>
              <div className={"mt-4 flex size-[12.063rem] flex-col items-center justify-center rounded-md bg-[#efebff]"}>
                <Image src={"/images/icon-upload-image.svg"} alt={"Upload"} width={40} height={40} />
                <p className={"font-bold leading-[150%] text-purple"}>+ Upload Image</p>
              </div>

              <div className={"pt-6"}>
                <p className={"text-xs text-gray"}>Image must be below 1024x1025px. Use PNG or JPG format.</p>
              </div>
            </div>
          </div>

          <div className={"mt-[2.5rem] rounded-lg bg-gray-light"}>
            <div className={"space-y-3 p-5"}>
              <Input label="First name*" iconPath={""} type="email" name="email" placeholder="Enter first name.." />
              <Input label="Last name*" iconPath={""} type="email" name="email" placeholder="Enter last name..." />
              <Input label="Email" iconPath={""} type="email" name="email" placeholder="e.g. alex@email.com" />
            </div>
          </div>
        </div>
        <div className={"border border-white border-t-[#d9d9d9] bg-white p-4"}>
          <button className={"w-full rounded-md bg-purple px-[1.688rem] py-[0.688rem] align-top text-[1rem] font-bold leading-[150%] text-white"} type="submit">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
