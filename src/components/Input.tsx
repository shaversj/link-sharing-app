import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

export type InputProps = {
  label: string;
  iconType: "default" | "email" | "password";
  type: string;
  name: string;
  placeholder: string;
};

export default function Input({ label, iconType, type, name, placeholder }: InputProps) {
  const inputVariants = cva(
    "text-dark-gray block w-full rounded-lg border border-gray-medium bg-left bg-no-repeat bg-origin-content px-4 py-3 text-[16px] leading-none placeholder:px-7 placeholder:leading-[150%]",
    {
      variants: {
        iconType: {
          default: "",
          email: "bg-[url('/images/icon-email.svg')]",
          password: "bg-[url('/images/icon-password.svg')]",
        },
      },
      defaultVariants: {
        iconType: "default",
      },
    },
  );

  return (
    <div>
      <label className={"text-dark-gray text-left align-top text-[12px] leading-[150%]"}>{label}</label>
      <input className={cn(inputVariants({ iconType }))} type={type} name={name} placeholder={placeholder} />
    </div>
  );
}
