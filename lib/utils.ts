import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPathname = (path: string): string => {
  let formattedPath = path.split('/').pop()?.toLowerCase() || '';
  formattedPath = formattedPath === 'dashboard' ? 'overview' : formattedPath;
  return formattedPath.charAt(0).toUpperCase() + formattedPath.slice(1);
};

export const currencyFormat = function(str: string) {
  if (str.includes('.')) {
      if (str.split('.')[1].length > 2) {
          return str.slice(0, -1);
      }
  }
  return str;
};