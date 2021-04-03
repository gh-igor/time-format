export default function timeFormat(time, locale) {
  return new Date(time).toLocaleString(locale);
}