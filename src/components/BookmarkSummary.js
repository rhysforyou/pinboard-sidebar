import { h } from 'preact';

export const BookmarkSummary = ({ bookmark, user }) =>
  <article
    className={'bookmark' + (bookmark.toread === 'yes' ? ' toread' : '')}>
    <h2 className="description">
      <a href={bookmark.href}>
        {bookmark.description}
      </a>
    </h2>
    {bookmark.extended &&
      <span className="extended">
        {bookmark.extended}
      </span>}
    <span className="tags">
      {bookmark.tags &&
        bookmark.tags.split(' ').map(tag =>
          <a href={`https://pinboard.in/u:${user}/t:${tag}`}>
            {tag + ' '}
          </a>
        )}
    </span>
  </article>;

export default BookmarkSummary;
