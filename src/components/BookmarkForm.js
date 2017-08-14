import { h } from 'preact';

const BookmarkForm = ({
  url,
  title,
  description,
  tags,
  isPrivate,
  isReadLater,
  onChange
}) =>
  <form class="add-bookmark" action="index.html" method="post">
    <label for="url">URL</label>
    <input type="text" name="url" id="url" onChange={onChange} value={url} />

    <label for="text">Title</label>
    <input
      type="text"
      name="title"
      id="title"
      onChange={onChange}
      value={title}
    />

    <label for="description">Description</label>
    <textarea
      name="description"
      id="description"
      rows="4"
      cols="40"
      onChange={onChange}
      value={description}
    />

    <label for="tags">Tags</label>
    <input type="text" name="tags" id="tags" onChange={onChange} value={tags} />

    <div class="actions">
      <label for="isPrivate">
        <input
          type="checkbox"
          name="isPrivate"
          id="isPrivate"
          onChange={onChange}
          value={isPrivate}
        />
        Private
      </label>
      <label for="isReadLater">
        <input
          type="checkbox"
          name="isReadLater"
          id="isReadLater"
          onChange={onChange}
          value={isReadLater}
        />
        Read Later
      </label>
      <button type="submit">Save Bookmark</button>
    </div>
  </form>;

export default BookmarkForm;
