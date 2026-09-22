export function absoluteImageUrl(path: string, siteUrl: string): string {
  return new URL(path, siteUrl).toString();
}
