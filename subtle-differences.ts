// enums vs literal union
type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'knockout'
enum ButtonTypes {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Knockout = 'knockout',
}

// overloads vs union type parameters
function applyWidthValue2(el: HTMLElement, val: WidthValue) {}

function applyWidthValue3(el: HTMLElement, val: string): void
function applyWidthValue3(el: HTMLElement, val: number): void
function applyWidthValue3(el: HTMLElement, val: { unit: string; value: number }): void
function applyWidthValue3(el: HTMLElement, val: WidthValue) {}

applyWidthValue2(el, '20px')
applyWidthValue3(el, '20px')

// arrays vs tuples
function getDimensions(rect: { width: number; height: number }) {
  return [rect.width, rect.height]
}
function getDimensions2(rect: { width: number; height: number }): [number, number] {
  return [rect.width, rect.height]
}

const [x, y, z] = getDimensions({} as any)
const [x2, y2, z2] = getDimensions2({} as any)

declare function transformText(options: {
  text: string
  uppercase?: boolean
  trim: boolean | undefined
}): string
transformText({ text: 'abc' })

const env = window.WidenEnv || window['WidenEnv']
