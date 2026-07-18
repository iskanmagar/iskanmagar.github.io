/** Extract a YouTube video ID from watch/short/embed/live URL forms. */
export function youtubeId(url?: string): string | null {
  if (!url) return null;
  const patterns = [
    /[?&]v=([^&]+)/, // watch?v=ID
    /youtu\.be\/([^?&/]+)/, // youtu.be/ID
    /\/(?:embed|shorts|live)\/([^?&/]+)/, // /embed|shorts|live/ID
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

export function youtubeThumb(url?: string): string | null {
  const id = youtubeId(url);
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : null;
}
