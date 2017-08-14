import 'babel-polyfill';
import { render, h } from 'preact';
import withCurrentUser from './containers/withCurrentUser';
import AddBookmark from './containers/AddBookmark';

const Root = withCurrentUser(AddBookmark);

render(<Root />, document.body);
