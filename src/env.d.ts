/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare function gtag(...args: any[]): void;

interface Window {
  gtag: (...args: any[]) => void;
  toggleFAQ?: (button: HTMLElement) => void;
  openInquiry?: (productName: string) => void;
  resetFilters?: () => void;
  changeMainImage?: (imageSrc: string, event: MouseEvent) => void;
}
