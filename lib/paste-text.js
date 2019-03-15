"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pasteText = pasteText;

var _electron = require("electron");

function pasteText() {
  const text = _electron.clipboard.readText();

  if (typeof text === 'string') {
    const {
      cm
    } = inkdrop.getActiveEditor();
    cm.replaceSelection(text);
  }

  return true;
}