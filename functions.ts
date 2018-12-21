function reverse(val: string): string {
  return val
    .split('')
    .reverse()
    .join('')
}

const arrowReverse = (val: string): string => reverse(val)

function implicitReturnReverse(val: string) {
  return reverse(val)
}
const reversedAbc = implicitReturnReverse('abc')

function getType(val: string): string // overload signatures need return type annotations
function getType(val: number): string
function getType(val: boolean): string
function getType(val: object): string
function getType(val: string | number | boolean | object) {
  return typeof val
}

function getArrayTypes<T>(array: T[]) {
  return typeof array[0]
}
const typeOfBooleanArray = getArrayTypes([true, true, false])
