declare const el: HTMLElement

// union type
type WidthValue = string | number | { unit: string; value: number }
const width = '20px' as WidthValue

function applyWidthValue(element: HTMLElement, width: string) {
  element.style.width = width
}
applyWidthValue(el, width)

function transformWidthValue(widthValue: WidthValue): string {
  return typeof width === 'string'
    ? width
    : typeof width === 'number'
    ? `${width}px`
    : `${width.value}${width.unit}`
}
applyWidthValue(el, transformWidthValue(width))

type Asset = {
  id: string
  filename: string
  type: string
}
// intersection type
type ImageAsset = Asset & {
  type: 'Image'
  dimensions: [number, number]
}
declare const image: ImageAsset
const [w, h] = image.dimensions

// conditional types
type IsImageAsset<T extends Asset> = T extends { type: 'Image' } ? true : false
type test1 = IsImageAsset<Asset>
type test2 = IsImageAsset<ImageAsset>

type VideoAsset = Asset & {
  type: 'Video'
}

type GetAssetType<T extends Asset> = T extends { type: infer T } ? T : string
type test3 = GetAssetType<Asset>
type test4 = GetAssetType<ImageAsset>
type test5 = GetAssetType<VideoAsset>
type GetAssetType2<T extends Asset> = T['type']
type test6 = GetAssetType2<ImageAsset>

function MyButton(props: { label: string; onClick(event: MouseEvent): void }) {
  return null
}

type GetProps<C> = C extends (props: infer P) => any ? P : {}
type GetOnClickEventTypeFromProps<P> = P extends { onClick(event: infer E): any } ? E : unknown
type GetOnClickEventTypeFromComponent<C> = C extends (props: infer P) => any
  ? GetOnClickEventTypeFromProps<P>
  : unknown

type GetOnClickEventType<T> = T extends (...args: any[]) => any
  ? GetOnClickEventTypeFromComponent<T>
  : GetOnClickEventTypeFromProps<T>

type MyButtonProps = GetProps<typeof MyButton>
type MyButtonClickEvent = GetOnClickEventTypeFromProps<GetProps<typeof MyButton>>
type MyButtonClickEvent2 = GetOnClickEventTypeFromComponent<typeof MyButton>
type MyButtonClickEvent3 = GetOnClickEventType<typeof MyButton>
type MyButtonClickEvent4 = GetOnClickEventType<MyButtonProps>
