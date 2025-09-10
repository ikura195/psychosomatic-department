<template>
  <button
    @click="toggleTheme"
    class="theme-toggle"
    :aria-label="isDark ? 'ライトモードに切り替え' : 'ダークモードに切り替え'"
  >
    <Sun v-if="isDark" class="w-5 h-5" />
    <Moon v-else class="w-5 h-5" />
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'

const isDark = ref(false)

// テーマを適用
const applyTheme = () => {
  const html = document.documentElement
  
  if (isDark.value) {
    html.setAttribute('data-theme', 'dark')
  } else {
    html.removeAttribute('data-theme')
  }
}

// テーマ切り替え
const toggleTheme = () => {
  isDark.value = !isDark.value
  applyTheme()
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

// メディアクエリの参照を保持
let mediaQuery: MediaQueryList | null = null
let handleChange: ((e: MediaQueryListEvent) => void) | null = null

// 初期化時にテーマを設定
onMounted(() => {
  // localStorageから保存されたテーマを取得
  const savedTheme = localStorage.getItem('theme')
  
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    // システム設定を確認
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  
  applyTheme()
  
  // システム設定の変更を監視
  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  
  handleChange = (e: MediaQueryListEvent) => {
    if (!localStorage.getItem('theme')) {
      isDark.value = e.matches
      applyTheme()
    }
  }
  
  mediaQuery.addEventListener('change', handleChange)
})

// クリーンアップ
onUnmounted(() => {
  if (mediaQuery && handleChange) {
    mediaQuery.removeEventListener('change', handleChange)
  }
})
</script>
