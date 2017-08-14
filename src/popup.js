import 'babel-polyfill';
import { render, h } from 'preact';
import withCurrentUser from './containers/withCurrentUser';
import BookmarkForm from './components/BookmarkForm';

const Root = withCurrentUser(BookmarkForm);

render(<Root />, document.body);
