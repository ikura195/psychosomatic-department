<template>
  <button
    @click="scrollToAccess"
    class="fixed bottom-6 right-6 z-50 rounded-2xl shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 px-6 py-4 hidden lg:flex"
    style="background-color: var(--yc-brand-base-500); color: var(--yc-neutral-gray-0);"
    aria-label="ご予約はこちら"
    data-analytics-id="floating-tel-cta"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="flex items-center space-x-3">
      <Phone class="w-6 h-6" />
      <span class="text-base font-medium whitespace-nowrap">ご予約はこちら</span>
    </div>
  </button>
</template>

<script setup lang="ts">
import { Phone } from 'lucide-vue-next'

// スムーズスクロール関数
const scrollToAccess = () => {
  const targetElement = document.getElementById('access')
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// ホバーエフェクト
const handleMouseEnter = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  target.style.backgroundColor = 'var(--yc-brand-base-600)'
}

const handleMouseLeave = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  target.style.backgroundColor = 'var(--yc-brand-base-500)'
}
</script>
