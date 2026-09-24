import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Figma asset exported from the Krow Labs file, stored in /public/images. */
export const img = (file: string) => `/images/${file}`;
