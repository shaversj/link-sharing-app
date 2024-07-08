import Image from "next/image";
import Link from "next/link";

export default function Header({ activePage }: { activePage: string }) {
  return (
    <>
      {activePage === "preview" ? (
        <>
          <div className={"flex w-full justify-center gap-x-4 py-4"}>
            <Link href={`/links/`} className={"grid min-w-[159.5px] place-items-center rounded-lg border border-purple py-[11px] font-semibold leading-[150%] text-purple"}>
              Back to Editor
            </Link>
            <a className={"min-w-[159.5px] rounded-lg border border-purple bg-purple py-[11px] leading-[150%] text-white"}>Share Link</a>
          </div>
        </>
      ) : (
        <>
          <div className={"bg-white py-4 pl-6 pr-4"}>
            <nav className={"flex items-center"}>
              <div className={"mr-auto"}>
                <Image src="/images/logo-devlinks-small.svg" alt="logo" width={32} height={32} />
              </div>

              <Link href={"/links"}>
                <div className={`grid h-[42px] w-[74px] place-items-center ${activePage === "links" ? "rounded-md bg-purple-light" : ""}`}>
                  <Image src="/images/icon-links-header.svg" alt="logo" width={21} height={20} />
                </div>
              </Link>

              <Link href={"/profile"}>
                <div className={`grid h-[42px] w-[74px] place-items-center ${activePage === "profile" ? "rounded-md bg-purple-light" : ""}`}>
                  <Image src="/images/icon-profile-details-header.svg" alt="logo" width={21} height={20} />
                </div>
              </Link>

              <Link href={"/preview"} key={"poop"} className={"ml-auto"}>
                <div className={`grid h-[42px] w-[52px] place-items-center rounded-md border border-purple`}>
                  <Image src="/images/icon-preview-header.svg" alt="logo" width={20} height={20} />
                </div>
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
