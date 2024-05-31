import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className={"py-4 pl-6 pr-4"}>
        <nav className={"flex justify-center"}>
          <div className={"flex min-h-full w-[3.25rem] items-center justify-start"}>
            <Image src="/images/logo-devlinks-small.svg" alt="logo" width={32} height={32} />
          </div>
          <div className={"ml-auto flex items-center justify-center rounded-md bg-purple-light px-[1.688rem] py-[0.688rem]"}>
            <Image src="/images/icon-links-header.svg" alt="logo" width={21} height={20} />
          </div>
          <div className={"flex items-center justify-center px-[1.688rem]"}>
            <Image src="/images/icon-profile-details-header.svg" alt="logo" width={21} height={20} />
          </div>
          <div className={"ml-auto flex items-center justify-center rounded-md border border-purple px-4"}>
            <Image src="/images/icon-preview-header.svg" alt="logo" width={20} height={20} />
          </div>
        </nav>
      </div>
    </>
  );
}
