<template>
  <footer class="pb-20 lg:pb-0" style="background-color: var(--yc-brand-glow-300); color: var(--yc-neutral-gray-900);">
    <div class="container-custom py-16">
      <!-- デスクトップ版フッター -->
      <div class="hidden md:block">
        <div class="grid grid-cols-3 gap-12">
          <!-- 左側：クリニック情報 -->
          <div>
            <div class="flex items-center mb-4">
              <img src="/favicon-32x32.png" alt="山内クリニック" class="w-8 h-8 mr-3" />
              <h3 class="text-xl font-bold" style="color: var(--yc-neutral-gray-900);">{{ site.clinicName }}</h3>
            </div>
            <p class="text-sm" style="color: var(--yc-neutral-gray-700);">
              © {{ new Date().getFullYear() }} {{ site.clinicName }}. All rights reserved.
            </p>
          </div>
          
          <!-- 中央：初めての方へ -->
          <div>
            <h4 class="text-lg font-semibold mb-6" style="color: var(--yc-neutral-gray-900);">初めての方へ</h4>
            <div class="space-y-3">
              <a href="#features" class="block transition-colors" style="color: var(--yc-neutral-gray-800);" @mouseenter="$event.target.style.color = 'var(--yc-neutral-gray-900)'" @mouseleave="$event.target.style.color = 'var(--yc-neutral-gray-800)'">特徴</a>
              <a href="#first-visit" class="block transition-colors" style="color: var(--yc-neutral-gray-800);" @mouseenter="$event.target.style.color = 'var(--yc-neutral-gray-900)'" @mouseleave="$event.target.style.color = 'var(--yc-neutral-gray-800)'">受診の流れ</a>
              <a href="#faq" class="block transition-colors" style="color: var(--yc-neutral-gray-800);" @mouseenter="$event.target.style.color = 'var(--yc-neutral-gray-900)'" @mouseleave="$event.target.style.color = 'var(--yc-neutral-gray-800)'">よくある質問</a>
            </div>
          </div>
          
          <!-- 右側：クリニックについて -->
          <div>
            <h4 class="text-lg font-semibold mb-6" style="color: var(--yc-neutral-gray-900);">クリニックについて</h4>
            <div class="space-y-3">
              <a href="#notices" class="block transition-colors" style="color: var(--yc-neutral-gray-800);" @mouseenter="$event.target.style.color = 'var(--yc-neutral-gray-900)'" @mouseleave="$event.target.style.color = 'var(--yc-neutral-gray-800)'">お知らせ</a>
              <a href="#philosophy" class="block transition-colors" style="color: var(--yc-neutral-gray-800);" @mouseenter="$event.target.style.color = 'var(--yc-neutral-gray-900)'" @mouseleave="$event.target.style.color = 'var(--yc-neutral-gray-800)'">診療方針・理念</a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- モバイル版フッター -->
      <div class="md:hidden">
        <div class="text-center">
          <p class="text-sm" style="color: var(--yc-neutral-gray-700);">
            © {{ new Date().getFullYear() }} {{ site.clinicName }}. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const site = useSite()
</script>