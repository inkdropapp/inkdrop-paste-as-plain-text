'use strict';

var _pasteText = require('./paste-text');

module.exports = {
  activate() {
    this.subscription = inkdrop.commands.add(document.body, {
      'paste-as-plain-text': () => (0, _pasteText.pasteText)()
    });
  },

  deactivate() {
    this.subscription.dispose();
  }
};
//# sourceMappingURL=index.js.map