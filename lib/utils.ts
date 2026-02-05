import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const placeholderImages = (id: string): string[] =>
  Array.from(
      { length: 6 },
      (_, i) =>
          `https://fastly.picsum.photos/id/${987 + parseInt(id, 10) + i}/200/200.jpg`
  );
