function saveOptions(e) {
  browser.storage.sync.set({
    authToken: document.querySelector('#auth-token').value
  });
  e.preventDefault();
}

function restoreOptions() {
  browser.storage.sync.get('authToken').then(res => {
    document.querySelector('#auth-token').value = res.authToken || '';
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('form').addEventListener('submit', saveOptions);
document
  .getElementById('reset-button')
  .addEventListener('click', restoreOptions);
