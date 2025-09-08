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
import { Sun, Moon } from 'lucide-vue-next'

const isDark = ref(false)

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
})

// テーマ切り替え
const toggleTheme = () => {
  isDark.value = !isDark.value
  applyTheme()
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

// テーマを適用
const applyTheme = () => {
  const html = document.documentElement
  
  if (isDark.value) {
    html.setAttribute('data-theme', 'dark')
  } else {
    html.removeAttribute('data-theme')
  }
}

// システム設定の変更を監視
onMounted(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  
  const handleChange = (e: MediaQueryListEvent) => {
    if (!localStorage.getItem('theme')) {
      isDark.value = e.matches
      applyTheme()
    }
  }
  
  mediaQuery.addEventListener('change', handleChange)
  
  onUnmounted(() => {
    mediaQuery.removeEventListener('change', handleChange)
  })
})
</script>
