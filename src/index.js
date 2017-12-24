import { pasteText } from './paste-text'

module.exports = {
  activate () {
    this.subscription = inkdrop.commands.add(document.body, {
      'paste-as-plain-text': () => pasteText()
    })
  },

  deactivate () {
    this.subscription.dispose()
  }
}
