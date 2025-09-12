<template>
  <section class="section-padding">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-12" style="color: var(--yc-neutral-gray-900);">お知らせ</h2>
        
        <!-- ローディング状態 -->
        <div v-if="pending" class="flex justify-center items-center py-12">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2" style="border-color: var(--yc-brand-base-500);"></div>
          <span class="ml-3" style="color: var(--yc-neutral-gray-600);">お知らせを読み込み中...</span>
        </div>
        
        <!-- エラー状態 -->
        <div v-else-if="error" class="p-8 rounded-lg" style="background-color: var(--yc-semantic-error-50); border: 1px solid var(--yc-semantic-error-200);">
          <div class="flex items-center justify-center mb-4">
            <AlertTriangle class="w-8 h-8" style="color: var(--yc-semantic-error-500);" />
          </div>
          <h3 class="text-lg font-semibold mb-2" style="color: var(--yc-semantic-error-800);">お知らせの読み込みに失敗しました</h3>
          <p class="mb-4" style="color: var(--yc-semantic-error-700);">
            申し訳ございませんが、お知らせの読み込み中にエラーが発生しました。
          </p>
          <a
            :href="site.noticeUrl"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center px-6 py-3 bg-orange-100 hover:bg-orange-200 text-orange-800 font-medium rounded-lg transition-colors duration-200"
          >
            <ExternalLink class="w-5 h-5 mr-2" />
            こちらのURLからご確認ください
          </a>
        </div>
        
        <!-- お知らせがない場合 -->
        <div v-else-if="!notice" class="p-8 rounded-lg" style="background-color: var(--yc-brand-base-50); border: 1px solid var(--yc-brand-base-200);">
          <div class="flex items-center justify-center mb-4">
            <Info class="w-8 h-8" style="color: var(--yc-brand-base-500);" />
          </div>
          <h3 class="text-lg font-semibold mb-2" style="color: var(--yc-neutral-gray-900);">現在お知らせはありません</h3>
          <p style="color: var(--yc-neutral-gray-700);">
            新しいお知らせがございましたら、こちらに表示されます。
          </p>
        </div>
        
        <!-- お知らせ表示 -->
        <div v-else class="text-left">
          <div class="p-8 rounded-lg" style="background-color: var(--yc-brand-base-50); border: 1px solid var(--yc-brand-base-200);">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-semibold" style="color: var(--yc-neutral-gray-900);">{{ notice.title }}</h3>
              <span class="text-sm px-3 py-1 rounded-full" style="background-color: var(--yc-brand-base-200); color: var(--yc-neutral-gray-700);">
                {{ formatDate(notice.date) }}
              </span>
            </div>
            <div class="prose max-w-none" style="color: var(--yc-neutral-gray-900) !important;">
              <p class="leading-relaxed whitespace-pre-line" style="color: var(--yc-neutral-gray-900) !important;">{{ notice.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { AlertTriangle, ExternalLink, Info } from 'lucide-vue-next'
import type { Notice } from '~/types/notice'

const site = useSite()
const { fetchNotice } = useNotion()

// お知らせを取得
const { data: notice, pending, error } = await useLazyAsyncData<Notice | null>('notice', async () => {
  return await fetchNotice()
})

// 日付フォーマット関数
const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
