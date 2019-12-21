export default function previewPost(html) {
  return html.split(' ').splice(0, 25).join(' ') + '...'
};
