// Patterns to identify pages we shouldn't be able to bookmark
const BLACKLIST = [
  /^https?:\/\/(.*\.)?pinboard\.in.*$/,
  /^about:.*$/,
  /^data:.*$/,
  /^chrome:\/\/.*$/
];

browser.tabs.onCreated.addListener(tab => {
  updateVisibilityForTab(tab.id);
});
browser.tabs.onUpdated.addListener(tabId => {
  updateVisibilityForTab(tabId);
});

browser.windows
  .getAll({ populate: true })
  .then(windows =>
    windows.map(window =>
      window.tabs.map(tab => updateVisibilityForTab(tab.id))
    )
  );

function updateVisibilityForTab(tabId) {
  browser.tabs.get(tabId).then(tab => {
    // console.log(tab);
    // If any of the rules match, this page is blacklisted
    const blacklisted = BLACKLIST.map(
      rule => tab.url.match(rule) != null
    ).reduce((a, b) => a || b, false);

    if (blacklisted) {
      browser.pageAction.hide(tabId);
    } else {
      browser.pageAction.show(tabId);
    }
  });
}
