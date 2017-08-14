import { h, Component } from 'preact';
import BookmarkSummary from './BookmarkSummary';

const BookmarkList = ({ bookmarks, user }) =>
  <main className="bookmark-list">
    {bookmarks.map(bookmark =>
      <BookmarkSummary key={bookmark.hash} bookmark={bookmark} user={user} />
    )}
  </main>;

export default BookmarkList;
