type Category = {
  id: string
  displayName: string
  emoji?: string
}

type Restaurant = {
  id: string
  name: string
  category: string
  website?: string
  source?: string
  pageContent?: Array<PageContent>
}

interface PageContent {
  type: string,
  value: string
}
