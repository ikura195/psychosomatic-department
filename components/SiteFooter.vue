<template>
  <footer class="bg-gray-900 text-white pb-20 lg:pb-0">
    <div class="container-custom py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        <!-- クリニック情報 -->
        <div>
          <h3 class="text-xl font-bold mb-6">{{ site.clinicName }}</h3>
          <div class="space-y-3">
            <div class="flex items-start">
              <MapPin class="w-5 h-5 mr-3 mt-0.5 text-gray-400 flex-shrink-0" />
              <p class="text-gray-300">{{ site.address }}</p>
            </div>
            <div class="flex items-center">
              <Phone class="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" />
              <a
                :href="`tel:${site.phone}`"
                class="text-gray-300 hover:text-white transition-colors"
              >
                {{ site.phone }}
              </a>
            </div>
          </div>
        </div>
        
        <!-- 標榜科・診療時間 -->
        <div>
          <h4 class="text-lg font-semibold mb-6">診療案内</h4>
          <div class="space-y-4">
            <div>
              <h5 class="font-medium text-gray-300 mb-2">標榜科</h5>
              <p class="text-gray-400 text-sm">心療内科・精神科</p>
            </div>
            <div>
              <h5 class="font-medium text-gray-300 mb-2">診療時間</h5>
              <div class="text-gray-400 text-sm space-y-1">
                <p>平日：9:30-12:30 / 15:00-18:00</p>
                <p>土曜：9:00-13:00</p>
                <p class="text-xs">※水・日・祝は休診</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- リンク -->
        <div>
          <h4 class="text-lg font-semibold mb-6">リンク</h4>
          <div class="space-y-3">
            <a
              :href="site.noticeUrl"
              target="_blank"
              rel="noopener"
              class="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <ExternalLink class="w-4 h-4 mr-2" />
              臨時案内・休診情報
            </a>
            <a
              href="#privacy"
              class="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <FileText class="w-4 h-4 mr-2" />
              プライバシーポリシー
            </a>
          </div>
        </div>
      </div>
      
      <!-- コピーライト -->
      <div class="border-t border-gray-800 mt-12 pt-8 text-center">
        <p class="text-gray-400 text-sm">
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