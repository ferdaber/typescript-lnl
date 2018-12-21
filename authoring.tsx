const someUnknownType = window['someGlobalObject'] as any
const someUnknownType2: any = window.setTimeout

type State = {
  wrn?: string
  codeToggles: Record<string, boolean> | null
}
const initialState: State = { codeToggles: null }
function initializeState() {
  initialState.wrn = 'foo:bar:baz'
  initialState.codeToggles = {}
}

function initializeApp() {
  initializeState()
  const userId = initialState.wrn.split(':')[1]
  const isSomeFeatureEnabled = initialState.codeToggles['app.feature']
}

const stringArray = ['a', 'b', 'c']
const numberArray: number[] = stringArray.map(letter => letter.charCodeAt(0))
const booleanArray = stringArray.map(letter => letter === 'a')

const myInput = <input onChange={event => event.target} />
