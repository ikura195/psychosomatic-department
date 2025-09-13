<template>
  <section class="relative min-h-[85vh] flex items-center pt-20">
    <div class="container-custom">
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
        
        
        <!-- 新年の挨拶画像 -->
        <div class="mt-8">
          <img 
            src="/images/animations/snake.jpg" 
            alt="2025年新年の挨拶 - 一陽来復" 
            class="mx-auto max-w-full h-auto rounded-lg shadow-lg"
            style="max-height: 300px;"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Phone, ExternalLink } from 'lucide-vue-next'

const site = useSite()
</script>