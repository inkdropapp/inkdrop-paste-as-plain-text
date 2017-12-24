'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pasteText = pasteText;

var _electron = require('electron');

function pasteText() {
  const text = _electron.clipboard.readText();
  if (typeof text === 'text') {
    const cm = inkdrop.getActiveEditor().codeMirror;
    cm.replaceSelection(text);
  }
  return true;
}
//# sourceMappingURL=paste-text.js.map