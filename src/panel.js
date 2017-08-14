import 'babel-polyfill';
import { render, h } from 'preact';
import CurrentUser from './containers/CurrentUser';
import RecentBookmarks from './containers/RecentBookmarks';

render(
  <CurrentUser>
    <RecentBookmarks />
  </CurrentUser>,
  document.body
);
