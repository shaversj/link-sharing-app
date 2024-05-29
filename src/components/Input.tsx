export type InputProps = {
  label: string;
  iconVariant: "email" | "password";
  type: string;
  name: string;
  placeholder: string;
};

export default function Input({ label, iconVariant, type, name, placeholder }: InputProps) {
  const iconVariants = {
    email: "bg-[url('/images/icon-email.svg')]",
    password: "bg-[url('/images/icon-password.svg')]",
  };

  const baseClasses =
    "text-dark-gray block w-full rounded-lg border border-gray-medium bg-left bg-no-repeat bg-origin-content px-4 py-3 text-[16px] leading-none placeholder:px-7 placeholder:leading-[150%]";

  return (
    <div>
      <label className={"text-left align-top text-[12px] leading-[150%] text-dark-gray"}>{label}</label>
      <input className={`${baseClasses} ${iconVariants[iconVariant]}`} type={type} name={name} placeholder={placeholder} />
    </div>
  );
}
