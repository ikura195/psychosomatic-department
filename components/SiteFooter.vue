<template>
  <footer class="pb-20 lg:pb-0" style="background-color: var(--yc-brand-glow-300); color: var(--yc-neutral-gray-900);">
    <div class="container-custom py-16">
      <!-- デスクトップ版フッター -->
      <div class="hidden md:block">
        <div class="flex items-start justify-start gap-12">
          <!-- 左側：クリニック情報 -->
          <div class="flex flex-col">
            <div class="flex items-center mb-6">
              <img src="/android-chrome-512x512.png" alt="山内クリニック" class="w-16 h-16 mr-3" />
              <h3 class="text-xl font-bold" style="color: var(--yc-neutral-gray-900);">{{ site.clinicName }}</h3>
            </div>
            <div class="mt-auto">
              <p class="text-sm" style="color: var(--yc-neutral-gray-700);">
                © {{ new Date().getFullYear() }} {{ site.clinicName }}. All rights reserved.
              </p>
            </div>
          </div>
          
          <!-- 中央と右側をグループ化 -->
          <div class="flex gap-32 mx-auto">
            <!-- 中央：初めての方へ -->
            <div class="flex flex-col">
              <h4 class="text-lg font-semibold mb-6" style="color: var(--yc-neutral-gray-900);">初めての方へ</h4>
              <div class="space-y-3">
                <a href="#features" class="footer-link block relative pb-1 transition-all duration-300" style="color: var(--yc-neutral-gray-800);">
                  <span class="relative">- 特徴</span>
                  <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300" style="background-color: var(--yc-brand-base-600);"></span>
                </a>
                <a href="#first-visit" class="footer-link block relative pb-1 transition-all duration-300" style="color: var(--yc-neutral-gray-800);">
                  <span class="relative">- 受診の流れ</span>
                  <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300" style="background-color: var(--yc-brand-base-600);"></span>
                </a>
                <a href="#faq" class="footer-link block relative pb-1 transition-all duration-300" style="color: var(--yc-neutral-gray-800);">
                  <span class="relative">- よくある質問</span>
                  <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300" style="background-color: var(--yc-brand-base-600);"></span>
                </a>
              </div>
            </div>
            
            <!-- 右側：クリニックについて -->
            <div class="flex flex-col">
              <h4 class="text-lg font-semibold mb-6" style="color: var(--yc-neutral-gray-900);">クリニックについて</h4>
              <div class="space-y-3">
                <a href="#notices" class="footer-link block relative pb-1 transition-all duration-300" style="color: var(--yc-neutral-gray-800);">
                  <span class="relative">- お知らせ</span>
                  <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300" style="background-color: var(--yc-brand-base-600);"></span>
                </a>
                <a href="#philosophy" class="footer-link block relative pb-1 transition-all duration-300" style="color: var(--yc-neutral-gray-800);">
                  <span class="relative">- 診療方針・理念</span>
                  <span class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300" style="background-color: var(--yc-brand-base-600);"></span>
                </a>
              </div>
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