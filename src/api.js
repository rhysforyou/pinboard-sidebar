const BASE_URL = 'https://api.pinboard.in/';
const FORMAT_JSON = 'json';

class PinboardURL extends URL {
  constructor(path, authToken) {
    super(path, BASE_URL);
    this.searchParams.set('format', FORMAT_JSON);
    this.searchParams.set('auth_token', authToken);
  }
}

export function recentBookmarksURL(authToken) {
  const url = new PinboardURL('/v1/posts/recent', authToken);
  return url.href;
}

export async function fetchRecentBookmarks(authToken) {
  const res = await fetch(recentBookmarksURL(authToken));
  const { posts, user } = await res.json();
  return { bookmarks: posts, user };
}
