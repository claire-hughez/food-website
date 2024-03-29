type Category = {
  id: string
  displayName: string
  emoji?: string
}

type Restaurant = {
  id: string
  name: string
  chainRestaurant: boolean
  category: string
  website?: string
  source?: string
  menuItemsTried? : Array<string>
  pageContent?: Array<PageContent>
}

interface PageContent {
  type: string,
  value: string
}
