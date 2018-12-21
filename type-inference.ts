export {}

type Context = {
  value: boolean
}
declare function performValidation(validationFn: (context: Context) => boolean): boolean
// call site inference
performValidation(context => context.value)

type GenericContext<T> = {
  value: T
}
declare function performValidation2<T>(
  val: T,
  validationFn: (context: GenericContext<T>) => boolean
): boolean
// generic parameter + call site
performValidation2('abc', context => context.value.toUpperCase() === 'ABC')

// declaration
const performValidationImpl: typeof performValidation = validationFn =>
  validationFn({ value: true })

declare const validator: {
  validate: typeof performValidation
}
// assignment
validator.validate = validationFn => validationFn({ value: true })

type AssetBase = {
  id: string
  type: string
  metadata?: { values: string[] }
}

type ImageAsset = AssetBase & {
  type: 'Image'
  dimensions: [number, number]
}

type VideoAsset = AssetBase & {
  type: 'Video'
  duration: number
}

type DocumentAsset = AssetBase & {
  type: 'Document'
  textContent: string
}

function doStuffWithAsset(asset: ImageAsset | VideoAsset | DocumentAsset) {
  // discriminated union
  switch (asset.type) {
    case 'Image':
      asset.dimensions
      break
    case 'Video':
      asset.duration
      break
    case 'Document':
      asset.textContent
  }
  // quick null check
  asset.metadata && asset.metadata.values.reverse()
}

// custom type guard
function isAssetAnImageType(asset: AssetBase): asset is ImageAsset {
  return asset.type === 'Image'
}
const asset = {} as AssetBase
if (isAssetAnImageType(asset)) {
  asset.dimensions
}
