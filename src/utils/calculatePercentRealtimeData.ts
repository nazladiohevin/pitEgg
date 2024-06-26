// Fungsi untuk menghitung persentase dan status data real-time berdasarkan range
export default function calculatePercentRealtimData(
  value: number,
  { topRange, bottomRange }: { topRange: number; bottomRange: number }
) {  
  let percentage = {
    percent: 0,
    status: "stable" // Status bisa berupa: "stable", "down", atau "up"
  };

  if (value > topRange) {
    const percent = ((value - topRange) / topRange) * 100;
    percentage.percent = percent;
    percentage.status = "up";
  } else if (value < bottomRange) {
    const percent = ((bottomRange - value) / bottomRange) * 100;
    percentage.percent = percent;
    percentage.status = "down";
  }

  return percentage;
}
