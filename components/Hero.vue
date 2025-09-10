<template>
  <section class="relative min-h-[85vh] flex items-center" style="background-color: var(--yc-neutral-gray-0);">
    <!-- アニメーション背景要素 -->
    <div class="hero-animation-container">
      <div class="hero-animation-element">
        <div class="hero-text-item" data-text="stress">
          <div class="text-lg md:text-xl font-medium mb-1" style="color: var(--yc-neutral-gray-800);">ストレス</div>
          <div class="text-sm md:text-base font-medium mb-1" style="color: var(--yc-neutral-gray-800);">不安</div>
          <div class="text-sm md:text-base font-medium" style="color: var(--yc-neutral-gray-800);">緊張</div>
        </div>
      </div>
      <div class="hero-animation-element">
        <div class="hero-text-item" data-text="depression">
          <div class="text-lg md:text-xl font-medium mb-1" style="color: var(--yc-neutral-gray-800);">うつ病</div>
          <div class="text-sm md:text-base font-medium" style="color: var(--yc-neutral-gray-800);">パニック障害</div>
        </div>
      </div>
      <div class="hero-animation-element">
        <div class="hero-text-item hero-text-main" data-text="kokoro">
          <div class="text-lg md:text-xl font-medium" style="color: var(--yc-semantic-warning-800);">こころ</div>
        </div>
      </div>
      <div class="hero-animation-element">
        <div class="hero-text-item" data-text="menopause">
          <div class="text-lg md:text-xl font-medium mb-1" style="color: var(--yc-neutral-gray-800);">更年期の健康</div>
          <div class="text-sm md:text-base font-medium" style="color: var(--yc-neutral-gray-800);">相談</div>
        </div>
      </div>
      <div class="hero-animation-element">
        <div class="hero-text-item" data-text="insomnia">
          <div class="text-lg md:text-xl font-medium mb-1" style="color: var(--yc-neutral-gray-800);">不眠</div>
          <div class="text-sm md:text-base font-medium mb-1" style="color: var(--yc-neutral-gray-800);">寝つきが悪い</div>
          <div class="text-sm md:text-base font-medium" style="color: var(--yc-neutral-gray-800);">途中で目が覚める</div>
        </div>
      </div>
    </div>

    <div class="container-custom relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- メインヘッダー -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style="color: var(--yc-brand-glow-900);">
          {{ site.clinicName }}
        </h1>
        
        <!-- CTAボタン -->
        <div class="flex justify-center items-center mt-8">
          <a 
            :href="`tel:${site.phone}`"
            class="btn-primary text-lg px-10 py-5 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            data-analytics-id="tel-cta-top"
          >
            <Phone class="w-5 h-5 mr-3" />
            電話で相談する
          </a>
        </div>
        
        <!-- 緊急時注意 -->
        <div class="mt-12 p-4 rounded" style="background-color: var(--yc-semantic-warning-50); border-left: 4px solid var(--yc-semantic-warning-400);">
          <p class="text-sm" style="color: var(--yc-neutral-gray-800);">
            <AlertTriangle class="w-4 h-4 inline mr-2" />
            緊急の受診が必要な際は119または地域の救急窓口にご相談ください。当サイトでは緊急対応は行っていません。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Phone, ExternalLink, AlertTriangle } from 'lucide-vue-next'

const site = useSite()
</script>