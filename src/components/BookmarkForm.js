import { h } from 'preact';

const BookmarkForm = () =>
  <form class="add-bookmark" action="index.html" method="post">
    <label for="url">URL</label>
    <input type="text" name="url" id="url" />
    <label for="text">Title</label>
    <input type="text" name="title" id="title" />
    <label for="description">Description</label>
    <textarea name="description" id="description" rows="4" cols="40" />
    <label for="tags">Tags</label>
    <input type="text" name="tags" id="tags" />
    <div class="actions">
      <label for="private">
        <input type="checkbox" name="private" id="private" />
        Private
      </label>
      <label for="read-later">
        <input type="checkbox" name="read-later" id="read-later" />
        Read Later
      </label>
      <button type="submit">Save Bookmark</button>
    </div>
  </form>;

export default BookmarkForm;
