class Chatbox {
  talkative: boolean

  constructor(shouldTalk: boolean = false) {
    this.talkative = shouldTalk
  }

  saySomething(): string {
    if (this.talkative) {
      const message: string = 'Hello world!'
      return message
    }
    return '...'
  }
}

new Chatbox().saySomething() // '...'
new Chatbox(true).saySomething() // 'Hello world!'
