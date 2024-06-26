export default function formatToRupiah(value: number):string {
  return new Intl.NumberFormat("id-ID", {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
}