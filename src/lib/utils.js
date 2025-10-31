import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names conditionally while applying Tailwind merge rules.
 *
 * @param {...import('clsx').ClassValue} inputs - The class values to combine.
 * @returns {string} A single string containing the merged class names.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
