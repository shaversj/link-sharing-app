import Image from "next/image";

export type InputProps = {
  label: string;
  iconPath: string | undefined;
  type: string;
  name?: string | undefined | null | "";
  placeholder: string;
  value?: string;
};

export default function Input({ label, iconPath, type, name, placeholder, value }: InputProps) {
  const baseClassVariants = {
    withIcon: "text-dark-gray block w-full rounded-lg border border-gray-medium bg-left bg-no-repeat bg-origin-content pl-10 py-3 text-[16px] leading-none placeholder:px-7 placeholder:leading-[150%]",
    withoutIcon: "text-dark-gray block w-full rounded-lg border border-gray-medium bg-left bg-no-repeat bg-origin-content px-4 py-3 text-[16px] leading-none placeholder:leading-[150%]",
  };

  return (
    <div>
      <label className={"text-left align-top text-[12px] leading-[150%] text-dark-gray"}>{label}</label>
      <div className={"relative"}>
        <div className={"absolute inset-y-0 left-0 flex items-center pl-3"}>{iconPath && <Image className={""} src={iconPath} alt={type} width={16} height={16} />}</div>
        {name ? (
          <input className={`${iconPath ? baseClassVariants["withIcon"] : baseClassVariants["withoutIcon"]} `} type={type} name={name} placeholder={placeholder} defaultValue={value} />
        ) : (
          <input className={`${iconPath ? baseClassVariants["withIcon"] : baseClassVariants["withoutIcon"]} `} type={type} placeholder={placeholder} defaultValue={value} />
        )}
      </div>
    </div>
  );
}
