type Primitives = number | string | boolean | symbol | null | undefined

type CallSignature = (arg: number, optionalArg?: boolean) => string

type Shape = {
  stringProp: string
  booleanProp: boolean
}

type PrimitiveLiteral = false | true | 0 | 1.5 | 'foo' | 'bar'

type Tuple = [number, number, number]

type Exotics =
  | any // is subtype of all types and supertype of all types
  | void // is supertype of null and undefined
  | unknown // is not a subtype of anything, must be asserted before use
  | never // is not a supertype of anything except itself, but subtype of everything
  | object // is anything that's not a primitive
