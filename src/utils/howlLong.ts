export default function howLong(html: string): number {
  return Math.ceil(html.split(' ').length / 250)
};
