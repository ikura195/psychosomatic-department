<template>
  <footer class="pb-20 lg:pb-0" style="background-color: var(--yc-neutral-gray-900); color: var(--yc-neutral-gray-100);">
    <div class="container-custom py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        <!-- クリニック情報 -->
        <div>
          <h3 class="text-xl font-bold mb-6" style="color: var(--yc-neutral-gray-100);">{{ site.clinicName }}</h3>
          <div class="space-y-3">
            <div class="flex items-start">
              <MapPin class="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style="color: var(--yc-neutral-gray-400);" />
              <p style="color: var(--yc-neutral-gray-300);">{{ site.address }}</p>
            </div>
            <div class="flex items-center">
              <Phone class="w-5 h-5 mr-3 flex-shrink-0" style="color: var(--yc-neutral-gray-400);" />
              <a
                :href="`tel:${site.phone}`"
                class="transition-colors"
                style="color: var(--yc-neutral-gray-300);"
                @mouseenter="$event.target.style.color = 'var(--yc-neutral-gray-100)'"
                @mouseleave="$event.target.style.color = 'var(--yc-neutral-gray-300)'"
              >
                {{ site.phone }}
              </a>
            </div>
          </div>
        </div>
        
        <!-- 標榜科・診療時間 -->
        <div>
          <h4 class="text-lg font-semibold mb-6" style="color: var(--yc-neutral-gray-100);">診療案内</h4>
          <div class="space-y-4">
            <div>
              <h5 class="font-medium mb-2" style="color: var(--yc-neutral-gray-300);">標榜科</h5>
              <p class="text-sm" style="color: var(--yc-neutral-gray-400);">心療内科・精神科</p>
            </div>
            <div>
              <h5 class="font-medium mb-2" style="color: var(--yc-neutral-gray-300);">診療時間</h5>
              <div class="text-sm space-y-1" style="color: var(--yc-neutral-gray-400);">
                <p>平日：9:30-12:30 / 15:00-18:00</p>
                <p>土曜：9:00-13:00</p>
                <p class="text-xs">※水・日・祝は休診</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- リンク -->
        <div>
          <h4 class="text-lg font-semibold mb-6" style="color: var(--yc-neutral-gray-100);">リンク</h4>
          <div class="space-y-3">
            <a
              :href="site.noticeUrl"
              target="_blank"
              rel="noopener"
              class="flex items-center transition-colors"
              style="color: var(--yc-neutral-gray-300);"
              @mouseenter="$event.target.style.color = 'var(--yc-neutral-gray-100)'"
              @mouseleave="$event.target.style.color = 'var(--yc-neutral-gray-300)'"
            >
              <ExternalLink class="w-4 h-4 mr-2" />
              臨時案内・休診情報
            </a>
            <a
              href="#privacy"
              class="flex items-center transition-colors"
              style="color: var(--yc-neutral-gray-300);"
              @mouseenter="$event.target.style.color = 'var(--yc-neutral-gray-100)'"
              @mouseleave="$event.target.style.color = 'var(--yc-neutral-gray-300)'"
            >
              <FileText class="w-4 h-4 mr-2" />
              プライバシーポリシー
            </a>
          </div>
        </div>
      </div>
      
      <!-- コピーライト -->
      <div class="mt-12 pt-8 text-center" style="border-top: 1px solid var(--yc-neutral-gray-800);">
        <p class="text-sm" style="color: var(--yc-neutral-gray-400);">
          © {{ new Date().getFullYear() }} {{ site.clinicName }}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { MapPin, Phone, ExternalLink, FileText } from 'lucide-vue-next'

const site = useSite()
</script>