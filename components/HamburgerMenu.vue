<template>
  <div class="fixed top-4 right-16 z-50">
    <button
      @click="toggleMenu"
      class="p-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
      style="background-color: var(--yc-brand-glow-900); color: var(--yc-neutral-gray-0);"
      :aria-label="isOpen ? 'メニューを閉じる' : 'メニューを開く'"
    >
      <Menu v-if="!isOpen" class="w-6 h-6" />
      <X v-else class="w-6 h-6" />
    </button>

    <!-- ドロップダウンメニュー -->
    <Transition
      enter-active-class="transition duration-200 ease-out transform"
      enter-from-class="scale-95 opacity-0 translate-y-2"
      enter-to-class="scale-100 opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in transform"
      leave-from-class="scale-100 opacity-100 translate-y-0"
      leave-to-class="scale-95 opacity-0 translate-y-2"
    >
      <div
        v-if="isOpen"
        class="absolute top-full right-0 mt-2 w-64 rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
        style="background-color: var(--yc-brand-base-100);"
      >
        <!-- 初めての方へ -->
        <div class="px-4 py-3 border-b border-gray-200">
          <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">初めての方へ</h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#features"
                class="footer-link block relative pb-1 transition-all duration-300"
                style="color: var(--yc-neutral-gray-800);"
              >
                <span class="relative">- 特徴</span>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300" style="background-color: var(--yc-brand-base-600);"></span>
              </a>
            </li>
            <li>
              <a
                href="#first-visit"
                class="footer-link block relative pb-1 transition-all duration-300"
                style="color: var(--yc-neutral-gray-800);"
              >
                <span class="relative">- 受診の流れ</span>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300" style="background-color: var(--yc-brand-base-600);"></span>
              </a>
            </li>
            <li>
              <a
                href="#faq"
                class="footer-link block relative pb-1 transition-all duration-300"
                style="color: var(--yc-neutral-gray-800);"
              >
                <span class="relative">- よくある質問</span>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300" style="background-color: var(--yc-brand-base-600);"></span>
              </a>
            </li>
          </ul>
        </div>

        <!-- クリニックについて -->
        <div class="px-4 py-3">
          <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">クリニックについて</h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#notices"
                class="footer-link block relative pb-1 transition-all duration-300"
                style="color: var(--yc-neutral-gray-800);"
              >
                <span class="relative">- お知らせ</span>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300" style="background-color: var(--yc-brand-base-600);"></span>
              </a>
            </li>
            <li>
              <a
                href="#philosophy"
                class="footer-link block relative pb-1 transition-all duration-300"
                style="color: var(--yc-neutral-gray-800);"
              >
                <span class="relative">- 診療方針・理念</span>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300" style="background-color: var(--yc-brand-base-600);"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Transition>

    <!-- オーバーレイ（メニュー外をクリックで閉じる） -->
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        @click="closeMenu"
        class="fixed inset-0 z-40 bg-black bg-opacity-0"
      ></div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}


// ESCキーでメニューを閉じる
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

// キーボードイベントリスナーを追加
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.footer-link:hover span:last-child {
  width: 100%;
}
.footer-link {
  text-decoration: none;
}
.footer-link:hover {
  color: var(--yc-brand-base-600) !important;
}
</style>
