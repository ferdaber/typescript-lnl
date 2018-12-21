type SomeComplicatedData = unknown
declare function thirdPartyApi(): Promise<SomeComplicatedData>

async function fetchApi() {
  const myData = await thirdPartyApi()
  const myDataAsNumber = myData as number
  return myDataAsNumber
}

fetchApi().then(returnValue => returnValue)
