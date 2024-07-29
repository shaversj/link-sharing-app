import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Header({ activePage, userId }: { activePage: string; userId?: string }) {
  function handleCopyURLClick() {
    // Copy URL to clipboard
    const url = window.location.href;
    navigator.clipboard.writeText(url);

    // Show toast notification
    toast((t) => (
      <div className={"flex gap-x-2 font-instrumentSans text-white"}>
        <Image src={"/images/icon-link-copied-to-clipboard.svg"} alt={"link copied"} width={20} height={20} />
        <div>Link copied to clipboard!</div>
      </div>
    ));
  }

  return (
    <>
      {activePage === "preview" ? (
        <>
          <div className={" md:bg-white md:justify-between md:m-6 md:rounded-xl flex justify-center gap-x-4 py-4"}>
            <Link href={`/links/`} className={"md:ml-6 grid min-w-[159.5px] place-items-center rounded-lg border border-purple py-[11px] font-semibold leading-[150%] text-purple"}>
              Back to Editor
            </Link>
            <button onClick={handleCopyURLClick} className={"md:mr-[18px] flex min-w-[159.5px] justify-center rounded-lg border border-purple bg-purple py-[11px] leading-[150%] text-white"}>
              Share Link
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={"bg-white py-4 pl-6 pr-4"}>
            <nav className={"flex items-center"}>
              <div className={"mr-auto"}>
                <Image className={"md:hidden"} src="/images/logo-devlinks-small.svg" alt="logo" width={32} height={32} />
                <Image className={"md:block hidden"} src="/images/logo-devlinks-large.svg" alt="logo" width={146} height={32} />
              </div>

              <Link href={"/links"}>
                <div
                  className={`md:w-[7.625rem] md:h-[2.875rem] grid h-[2.625rem] w-[4.625rem] place-items-center ${activePage === "links" ? "rounded-md bg-purple-light text-purple" : "text-project-gray"}`}
                >
                  <div className={"md:flex md:gap-x-2"}>
                    <Image src="/images/icon-links-header.svg" alt="logo" width={21} height={20} />
                    <h3 className={"md:block hidden font-instrumentSans font-semibold"}>Links</h3>
                  </div>
                </div>
              </Link>

              <Link href={"/profile"}>
                <div
                  className={`md:w-[11.688rem] md:h-[3rem] grid h-[2.625rem] w-[4.625rem] place-items-center ${activePage === "profile" ? "rounded-md bg-purple-light text-purple" : "text-project-gray"}`}
                >
                  <div className={"md:flex md:gap-x-2"}>
                    <Image src="/images/icon-profile-details-header.svg" alt="logo" width={21} height={20} />
                    <h3 className={"md:block hidden font-instrumentSans font-semibold"}>Profile Details</h3>
                  </div>
                </div>
              </Link>

              <Link href={`/profile/${userId}`} className={"ml-auto"}>
                <div className={`md:w-[7.125rem] md:h-[2.875rem] grid h-[2.625rem] w-[3.25rem] place-items-center rounded-md border border-purple`}>
                  <Image className={"md:hidden"} src="/images/icon-preview-header.svg" alt="logo" width={20} height={20} />
                  <h3 className={"md:block hidden font-instrumentSans font-semibold text-purple"}>Preview</h3>
                </div>
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
