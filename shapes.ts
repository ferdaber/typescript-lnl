const computedProperty = '__SECRET_MAGIC_STRING'

type MyShape = {
  // call signature
  (): boolean
  (callSignatureOverload: number): boolean
  // methods
  foo(): void
  foo(overload: boolean): void

  readonly dontTouch: string
  optionalProp?: { foo: string }
  [computedProperty]: number
}

declare const myShape: MyShape
const shaped = myShape(0)
const shapedMethod = myShape.foo(true)
const shapedComputed = myShape[computedProperty]
myShape.optionalProp.foo
myShape.dontTouch = 'abc'

type CodeToggles = {
  [codeToggleName: string]: boolean
}
declare const codeToggles: CodeToggles
const myToggle = codeToggles['app.enable-some-feature']

type GenericShape<T> = {
  label: string
  value: T
}
type OptionList<T> = Array<GenericShape<T>>

interface MyInterface extends MyShape {}
