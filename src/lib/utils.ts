import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { randomUUID } from "node:crypto";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateSessionToken = () => {
  return randomUUID();
};

export const fromDate = (time: number, date = Date.now()) => {
  return new Date(date + time * 1000);
};
