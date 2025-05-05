export function formatNumberWithSpaces(value: string | number): string {
    const strValue = String(value).replace(/\D/g, '');
    return strValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }