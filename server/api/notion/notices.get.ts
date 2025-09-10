import type { NotionResponse } from '~/types/notice'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  const notionApiKey = config.public.notionApiKey
  const databaseId = config.public.notionDatabaseId

  if (!notionApiKey || !databaseId) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Notion API設定が正しくありません'
    })
  }

  try {
    const response = await $fetch<NotionResponse>(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${notionApiKey}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json'
      },
      body: {
        sorts: [
          {
            property: '日付',
            direction: 'descending'
          }
        ],
        page_size: 1 // 最新の1件のみ取得
      }
    })

    return response
  } catch (error: any) {
    console.error('Notion API エラー:', error)
    
    throw createError({
      statusCode: error.status || 500,
      statusMessage: error.message || 'Notion API からのデータ取得に失敗しました'
    })
  }
})
