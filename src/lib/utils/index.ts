import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Allows us to render tailwind conditional classes.
 * source: https://medium.com/@maharajabain190/effortlessly-write-conditional-css-or-cn-functions-in-just-5-minutes-using-tailwind-merge-and-cda097f0c3bb  */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
