import Image from "next/image";

export default function SiteLink({ imagePath, siteName }: { imagePath: string; siteName: string }) {
  const baseClass = "flex h-[56px] w-[237px] items-center rounded-lg bg-black px-4 ";
  const backgroundVariants = {
    GitHub: "bg-black",
    twitter: "bg-blue",
    linkedin: "bg-blue",
    facebook: "bg-blue",
    instagram: "bg-purple",
    dribbble: "bg-pink",
    behance: "bg-blue",
    website: "bg-black",
  };

  return (
    <>
      <div className={`${baseClass} ${backgroundVariants[siteName as keyof typeof backgroundVariants]}`}>
        <Image src={"/images/icon-github.svg"} alt={"Github"} width={20} height={20} />
        <span className={"pl-[8px] leading-[150%] text-white"}>{siteName}</span>
        <svg className={"ml-auto"} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.66699 7.33355V8.66688H10.667L7.00033 12.3335L7.94699 13.2802L13.227 8.00022L7.94699 2.72021L7.00033 3.66688L10.667 7.33355H2.66699Z" fill="white" />
        </svg>
      </div>
    </>
  );
}
