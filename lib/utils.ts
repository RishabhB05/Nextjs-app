import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export function formatDate(date: Date) {
//   return new Date(date).toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });
// }

// export function formatDate(input: string | Date): string {
//   const date = typeof input === 'string' ? new Date(input) : input;
//   return date.toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });
// }

// lib/utils.ts
export function formatDate(input?: string | Date | null): string {
  if (!input) return "No date"; // Handles undefined/null/empty string
  
  try {
    const date = typeof input === 'string' ? new Date(input) : input;
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return "Invalid date";
    }
    
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (error) {
    console.error("Date formatting error:", error);
    return "Invalid date";
  }
}