export type Smoo = {
  name: string
}

export const smooFactory = (name: string): Smoo => ({ name })
