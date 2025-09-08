<template>
  <section class="section-padding bg-gray-50">
    <div class="container-custom">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-16">アクセス</h2>
      
      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- アクセス情報 -->
        <div class="space-y-6">
          <div class="bg-white p-8 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <MapPin class="w-5 h-5 mr-2 text-blue-600" />
              所在地
            </h3>
            <p class="text-gray-700 mb-4">{{ site.address }}</p>
            
            <div class="border-t pt-4">
              <h4 class="font-semibold text-gray-900 mb-2">最寄り駅</h4>
              <p class="text-gray-700">{{ site.nearest }}</p>
            </div>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-sm">
            <h3 class="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Phone class="w-5 h-5 mr-2 text-blue-600" />
              お電話でのご予約
            </h3>
            <div class="space-y-4">
              <a
                :href="`tel:${site.phone}`"
                class="block text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
                data-analytics-id="tel-cta-access"
              >
                {{ site.phone }}
              </a>
              <p class="text-sm text-gray-600">
                ※診療時間内にお電話ください<br>
                ※Web予約は行っておりません
              </p>
            </div>
          </div>
        </div>
        
        <!-- 地図 -->
        <div class="bg-white rounded-lg shadow-sm overflow-hidden">
          <div class="aspect-w-16 aspect-h-12 bg-gray-200">
            <div class="flex items-center justify-center h-64">
              <div class="text-center">
                <MapPin class="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <p class="text-gray-500 mb-4">地図を表示</p>
                <a
                  :href="site.mapUrl"
                  target="_blank"
                  rel="noopener"
                  class="btn-primary"
                >
                  <ExternalLink class="w-4 h-4 mr-2" />
                  Googleマップで開く
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MapPin, Phone, ExternalLink } from 'lucide-vue-next'

const site = useSite()
</script>