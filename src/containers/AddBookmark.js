import { Component, h } from 'preact';
import BookmarkForm from '../components/BookmarkForm';

export default class AddBookmark extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      title: '',
      description: '',
      tags: '',
      isPrivate: false,
      isReadLater: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async componentWillMount() {
    const tabs = await browser.tabs.query({
      active: true,
      currentWindow: true
    });
    const activeTabInfo = tabs[0];

    this.setState({
      url: activeTabInfo.url,
      title: activeTabInfo.title
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  render() {
    const {
      url,
      title,
      description,
      tags,
      isPrivate,
      isReadLater
    } = this.state;

    return (
      <BookmarkForm
        url={url}
        title={title}
        description={description}
        tags={tags}
        isPrivate={isPrivate}
        isReadLater={isReadLater}
        onChange={this.handleChange}
      />
    );
  }
}
