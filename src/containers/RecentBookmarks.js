import { Component, h } from 'preact';
import BookmarkList from '../components/BookmarkList';
import { fetchRecentBookmarks } from '../api';

export default class RecentBookmarks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      bookmarks: [],
      user: null
    };
  }

  async componentWillMount() {
    const { bookmarks, user } = await fetchRecentBookmarks(
      this.props.authToken
    );

    this.setState({
      loaded: true,
      bookmarks,
      user
    });
  }

  render() {
    if (this.state.loaded) {
      return (
        <BookmarkList bookmarks={this.state.bookmarks} user={this.state.user} />
      );
    } else {
      return <span>Loading…</span>;
    }
  }
}
