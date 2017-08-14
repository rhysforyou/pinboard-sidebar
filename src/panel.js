import 'babel-polyfill';
import { render, h } from 'preact';
import withCurrentUser from './containers/withCurrentUser';
import RecentBookmarks from './containers/RecentBookmarks';

const Root = withCurrentUser(RecentBookmarks);

render(<Root />, document.body);
