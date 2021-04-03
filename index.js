export default function timeFormat(time, locale) {
  return new Date(time).toLocaleString(locale);
}

export function echo(...args) {
  console.log(args);
}
