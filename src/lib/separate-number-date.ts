
export function extractNumber(raw?: string): number {
    const str = raw ?? "";
    const cleaned = str.startsWith("+") ? str.slice(1) : str;
    const parsed = parseInt(cleaned, 10);
    return Number.isNaN(parsed) ? 0 : parsed;
  }
  
  export function extractSuffix(raw?: string): string {
    const str = raw ?? "";
    const cleaned = str.startsWith("+") ? str.slice(1) : str;
    return cleaned.replace(/\d+/g, "");
  }
  