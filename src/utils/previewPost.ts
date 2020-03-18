export default function previewPost(html: string): string {
  return html.split(' ').splice(0, 25).join(' ') + '...'
};
