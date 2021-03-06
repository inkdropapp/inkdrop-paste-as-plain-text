import { clipboard } from 'electron'

export function pasteText() {
  const text = clipboard.readText()
  if (typeof text === 'string') {
    const { cm } = inkdrop.getActiveEditor()
    cm.replaceSelection(text)
  }
  return true
}
