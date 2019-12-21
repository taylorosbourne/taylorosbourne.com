export default function howLong(html) {
  return Math.ceil(html.split(' ').length / 250)
}
