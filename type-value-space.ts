// value space
const foo = 'abc'
const bar = typeof 'abc'

function fooFn({ foo: boundFoo, bar: boundBar }) {
  return { boundFoo, boundBar }
}

// type space
type foo = 'abc'
const foo2: foo = 'abc'
type fooType = typeof foo2
type fooFnCallSignature = typeof fooFn

function fooFn2({ foo: boundFoo, bar: boundBar }: { foo: string; bar: number }) {
  return { boundFoo, boundBar }
}

enum Alpha {
  A,
  B,
  C,
}
type AlphaValues = Alpha
function takeAlphaValues(alpha: AlphaValues) {}
takeAlphaValues(3)

declare const alpha: typeof Alpha
const alpha1 = alpha['A']

class Foo {
  static staticProp = 'abc'

  constructor(public str: string) {}

  method(): void {}
}
declare const fooInstance: Foo
declare const fooConstructor: typeof Foo
fooInstance.method()
fooConstructor.staticProp
