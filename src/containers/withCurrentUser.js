import { Component, h } from 'preact';

export default function withCurrentUser(WrappedComponent) {
  class WithCurrentUser extends Component {
    constructor(props) {
      super(props);

      this.state = {
        authToken: null
      };

      this.handleStorageUpdated = this.handleStorageUpdated.bind(this);
    }

    componentWillMount() {
      this.updateAuthToken();
      browser.storage.onChanged.addListener(this.handleStorageUpdated);
    }

    componentWillUnmount() {
      browser.storage.onChanged.removeListener(this.handleStorageUpdated);
    }

    handleStorageUpdated(changes) {
      if (changes.hasOwnProperty('authToken')) {
        this.updateAuthToken();
      }
    }

    async updateAuthToken() {
      const storage = await browser.storage.sync.get('authToken');
      this.setState({
        authToken: storage.authToken
      });
    }

    render() {
      if (this.state.authToken != null && this.state.authToken.length > 0) {
        return (
          <WrappedComponent authToken={this.state.authToken} {...this.props} />
        );
      } else {
        return (
          <div className="no-content">
            <p>Set up your auth token on the extension options page</p>
            <button onClick={() => browser.runtime.openOptionsPage()}>
              Open Options
            </button>
          </div>
        );
      }
    }
  }

  WithCurrentUser.displayName = `withCurrentUser(${getDisplayName(
    WrappedComponent
  )})`;

  return WithCurrentUser;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
