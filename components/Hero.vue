<template>
  <section class="relative min-h-[85vh] flex items-center" style="background-color: var(--yc-neutral-gray-0);">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto text-center">
        <!-- メインヘッダー -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style="color: var(--yc-brand-glow-900);">
          {{ site.clinicName }}
        </h1>
        
        <!-- サブタイトル -->
        <p class="text-lg md:text-xl mb-12 leading-relaxed" style="color: var(--yc-neutral-gray-800);">
          不眠・不安・気分の落ち込み…まずはお電話でご相談ください。
        </p>
        
        <!-- CTAボタン -->
        <div class="flex justify-center items-center">
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