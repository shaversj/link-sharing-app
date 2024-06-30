import Image from "next/image";
import Link from "next/link";

export default function Header({ activePage }: { activePage: string }) {
  return (
    <>
      <div className={"py-4 pl-6 pr-4"}>
        <nav className={"flex items-center"}>
          <div className={"mr-auto"}>
            <Image src="/images/logo-devlinks-small.svg" alt="logo" width={32} height={32} />
          </div>

          <Link href={"/links"}>
            <div className={`grid h-[42px] w-[74px] place-items-center ${activePage === "links" ? "rounded-md bg-purple-light" : ""}`}>
              <Image src="/images/icon-links-header.svg" alt="logo" width={21} height={20} />
            </div>
          </Link>

          <Link href={"/details"}>
            <div className={`grid h-[42px] w-[74px] place-items-center ${activePage === "details" ? "rounded-md bg-purple-light" : ""}`}>
              <Image src="/images/icon-profile-details-header.svg" alt="logo" width={21} height={20} />
            </div>
          </Link>

          <Link href={"/profile"} className={"ml-auto"}>
            <div className={`grid h-[42px] w-[52px] place-items-center rounded-md border border-purple ${activePage === "profile" ? "bg-purple-light" : ""}`}>
              <Image src="/images/icon-preview-header.svg" alt="logo" width={20} height={20} />
            </div>
          </Link>
        </nav>
      </div>
    </>
  );
}
