// お知らせの型定義
export interface Notice {
  id: string
  title: string
  content: string
  date: string
}

// Notion API レスポンスの型定義
export interface NotionPage {
  id: string
  properties: {
    'タイトル': {
      title: Array<{
        plain_text: string
      }>
    }
    '本文': {
      rich_text: Array<{
        plain_text: string
      }>
    }
    '日付': {
      date: {
        start: string
      } | null
    }
  }
}

export interface NotionResponse {
  results: NotionPage[]
  has_more: boolean
  next_cursor: string | null
}
