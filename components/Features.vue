<template>
  <section id="features" class="section-padding">
    <div class="container-custom">
      <h2 class="text-3xl font-bold text-center mb-16" style="color: var(--yc-neutral-gray-900);">当院の特徴</h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="card" style="background-color: var(--yc-neutral-gray-0); border-color: var(--yc-neutral-gray-200); box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background-color: var(--yc-brand-base-100);">
            <Clock class="w-6 h-6" style="color: var(--yc-brand-base-500);" />
          </div>
          <h3 class="text-lg font-semibold mb-3" style="color: var(--yc-neutral-gray-900);">初診はゆとりある診療枠</h3>
          <p class="text-sm leading-relaxed" style="color: var(--yc-neutral-gray-800);">
            初回の診察では十分なお時間を確保し、患者様のお話をじっくりとお伺いします。
          </p>
        </div>
        
        <div class="card" style="background-color: var(--yc-neutral-gray-0); border-color: var(--yc-neutral-gray-200); box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background-color: var(--yc-brand-base-100);">
            <Shield class="w-6 h-6" style="color: var(--yc-brand-base-500);" />
          </div>
          <h3 class="text-lg font-semibold mb-3" style="color: var(--yc-neutral-gray-900);">プライバシー配慮の待合</h3>
          <p class="text-sm leading-relaxed" style="color: var(--yc-neutral-gray-800);">
            他の患者様と顔を合わせにくい配置や、静かで落ち着いた待合環境を整えています。
          </p>
        </div>
        
        <div class="card" style="background-color: var(--yc-neutral-gray-0); border-color: var(--yc-neutral-gray-200); box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background-color: var(--yc-brand-base-100);">
            <MapPin class="w-6 h-6" style="color: var(--yc-brand-base-500);" />
          </div>
          <h3 class="text-lg font-semibold mb-3" style="color: var(--yc-neutral-gray-900);">駅から徒歩圏内</h3>
          <p class="text-sm leading-relaxed" style="color: var(--yc-neutral-gray-800);">
            最寄り駅から徒歩でアクセスしやすい立地で、通院の負担を軽減します。
          </p>
        </div>
        
        <div class="card" style="background-color: var(--yc-neutral-gray-0); border-color: var(--yc-neutral-gray-200); box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style="background-color: var(--yc-brand-base-100);">
            <Users class="w-6 h-6" style="color: var(--yc-brand-base-500);" />
          </div>
          <h3 class="text-lg font-semibold mb-3" style="color: var(--yc-neutral-gray-900);">地域医療との連携</h3>
          <p class="text-sm leading-relaxed" style="color: var(--yc-neutral-gray-800);">
            必要に応じて他の医療機関と連携し、総合的な治療サポートを提供します。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Clock, Shield, MapPin, Users } from 'lucide-vue-next'
</script>