import Image from "next/image";
import Input from "@/components/Input";
import Header from "@/components/Header";
import { auth } from "../../../auth";
import InputFile from "@/components/InputFile";

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

              {session.user.image ? (
                <>
                  <div id={"upload_pic"} className={"relative mt-4 flex size-[12.063rem] flex-col items-center justify-center rounded-md border border-black "}>
                    <label htmlFor={"file"}>
                      <Image
                        src={session.user.image.startsWith("http") ? session.user.image : `data:image/png;base64,` + session.user.image}
                        alt={"Profile Picture"}
                        fill={true}
                        className={"opacity-25"}
                      />
                      <div className={"flex flex-col items-center justify-center"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
                          <path
                            fill="white"
                            d="M33.75 6.25H6.25a2.5 2.5 0 0 0-2.5 2.5v22.5a2.5 2.5 0 0 0 2.5 2.5h27.5a2.5 2.5 0 0 0 2.5-2.5V8.75a2.5 2.5 0 0 0-2.5-2.5Zm0 2.5v16.055l-4.073-4.072a2.5 2.5 0 0 0-3.536 0l-3.125 3.125-6.875-6.875a2.5 2.5 0 0 0-3.535 0L6.25 23.339V8.75h27.5ZM6.25 26.875l8.125-8.125 12.5 12.5H6.25v-4.375Zm27.5 4.375h-3.34l-5.624-5.625L27.91 22.5l5.839 5.84v2.91ZM22.5 15.625a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Z"
                          />
                        </svg>
                        <p className={"relative text-[16px] font-bold leading-[150%] text-white"}>Change Image</p>
                      </div>
                    </label>
                    <InputFile userId={session.user.id} />
                  </div>
                </>
              ) : (
                <>
                  <div className={"relative mt-4 flex size-[12.063rem] flex-col items-center justify-center rounded-md bg-[#efebff]"}>
                    <label htmlFor={"file"}>
                      <div className={"flex flex-col items-center"}>
                        <Image src={"/images/icon-upload-image.svg"} width={40} height={40} alt={"Upload"} />
                        <p className={"font-bold leading-[150%] text-purple"}>+ Upload Image</p>
                      </div>
                    </label>
                    <InputFile userId={session.user.id} />
                  </div>
                </>
              )}

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
