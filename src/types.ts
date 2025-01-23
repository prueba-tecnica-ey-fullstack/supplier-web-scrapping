export type ItemResult = {
  firmName: string | null
  address: string | null
  country: string | null
  fromDate: string | null
  toDate: string | null
  grounds: string | null
}

export type ScrappingResponse = {
  hits: number
  results: ItemResult[]
}