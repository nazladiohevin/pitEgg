/**
 * 
 * @param value nilai watt
 * @param pricePerKWH harga listrik perKWH (disesuaikan dengan jenis golongan listrik). Default 1444.70 => disesuaikan dengan rata-rata penggunaan golongan lsitrik pada peternakan ayam petelur
 */
export default function getEstimastedElectricityCost(kwh: number, pricePerKWH: number = 1444.70):number {  
  // Convert watt to KWH
  const totalPrice = kwh * pricePerKWH;  
  return totalPrice;
}