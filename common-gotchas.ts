// setting after declaration
type BuiltShape = {
  firstProp: number
  secondProp: string
}
const myShape: BuiltShape = {}
if (window['someCondition']) {
  myShape.firstProp = 1
}
myShape.secondProp = 'abc'

class MessageBoard {
  constructor(public message: string) {}

  // implicit this: any
  getMessageReporter() {
    return function reporter() {
      return this.message
    }
  }
}
const messageReporter = new MessageBoard('Hi!').getMessageReporter()

const VoiceBoard = {
  displayMessage: messageReporter(),
}

function someFn(boolean: string): void {}
// referencing function type
const someFnImpl: someFn = (boolean: string) => null

// typing deconstructed params
function getAssetFilename({ filename: string, extension: string }) {
  return `${filename}.${extension}`
}
