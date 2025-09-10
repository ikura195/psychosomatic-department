import type { Notice, NotionResponse } from '~/types/notice'

export const useNotion = () => {
  const config = useRuntimeConfig()
  
  // キャッシュキー
  const CACHE_KEY = 'notion-notice'
  const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000 // 7日間（ミリ秒）

  // お知らせを取得する関数
  const fetchNotice = async (): Promise<Notice | null> => {
    try {
      // キャッシュから取得を試行
      const cached = getCachedNotice()
      if (cached) {
        return cached
      }

      // サーバーサイドAPIから取得
      const response = await $fetch<NotionResponse>('/api/notion/notices')

      if (!response.results || response.results.length === 0) {
        return null
      }

      // 最新のお知らせを取得（作成日時でソート）
      const latestNotice = response.results[0]
      const notice: Notice = {
        id: latestNotice.id,
        title: latestNotice.properties['タイトル'].title[0]?.plain_text || '',
        content: latestNotice.properties['本文'].rich_text[0]?.plain_text || '',
        date: latestNotice.properties['日付'].date?.start || new Date().toISOString().split('T')[0]
      }

      // キャッシュに保存
      setCachedNotice(notice)
      
      return notice
    } catch (error) {
      console.error('Notion API エラー:', error)
      return null
    }
  }

  // キャッシュからお知らせを取得
  const getCachedNotice = (): Notice | null => {
    if (process.client) {
      try {
        const cached = localStorage.getItem(CACHE_KEY)
        if (cached) {
          const data = JSON.parse(cached)
          const now = Date.now()
          if (now - data.timestamp < CACHE_DURATION) {
            return data.notice
          }
        }
      } catch (error) {
        console.error('キャッシュ取得エラー:', error)
      }
    }
    return null
  }

  // お知らせをキャッシュに保存
  const setCachedNotice = (notice: Notice) => {
    if (process.client) {
      try {
        const data = {
          notice,
          timestamp: Date.now()
        }
        localStorage.setItem(CACHE_KEY, JSON.stringify(data))
      } catch (error) {
        console.error('キャッシュ保存エラー:', error)
      }
    }
  }

  // キャッシュをクリア
  const clearCache = () => {
    if (process.client) {
      localStorage.removeItem(CACHE_KEY)
    }
  }

  return {
    fetchNotice,
    clearCache
  }
}
