export function calculateNasiya(price: number, nasiya: string): number {
    const months = parseInt(nasiya);
    if (isNaN(months) || months <= 0) return 0;
    return Math.round(price / months);
  }