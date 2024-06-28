import Image from "next/image";
import Link from "next/link";

export default function Header({ activePage }: { activePage: string }) {
  return (
    <>
      <div className={"py-4 pl-6 pr-4"}>
        <nav className={"flex justify-center"}>
          <div className={"flex min-h-full w-[3.25rem] items-center justify-start"}>
            <Image src="/images/logo-devlinks-small.svg" alt="logo" width={32} height={32} />
          </div>
          <Link href={"/links"}>
            <div className={`ml-auto flex items-center justify-center rounded-md px-[1.688rem] py-[0.688rem] ${activePage === "links" ? "bg-purple-light" : ""}`}>
              <Image src="/images/icon-links-header.svg" alt="logo" width={21} height={20} />
            </div>
          </Link>

          <Link href={"/details"}>
            <div className={`flex items-center justify-center px-[1.688rem] ${activePage === "details" ? "bg-purple-light" : ""}`}>
              <Image src="/images/icon-profile-details-header.svg" alt="logo" width={21} height={20} />
            </div>
          </Link>

          <Link href={"/profile"}>
            <div className={`flex items-center justify-center px-[1.688rem] ${activePage === "profile" ? "bg-purple-light" : ""}`}>
              <Image src="/images/icon-preview-header.svg" alt="logo" width={20} height={20} />
            </div>
          </Link>
        </nav>
      </div>
    </>
  );
}
