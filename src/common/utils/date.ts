export function timeForSec(time: string) {
  const [hours = '0', minutes = '0', seconds = '0'] = time.split(":");

  const hoursInSec = Number(hours) * 3600;
  const minutesInSec = Number(minutes) * 60;
  return hoursInSec + minutesInSec + Number(seconds);
}