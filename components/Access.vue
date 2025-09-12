<template>
  <section id="access" class="section-padding">
    <div class="container-custom">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-16">アクセス</h2>
      
      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- アクセス情報 -->
        <div class="space-y-6">
          <div class="pt-6 pb-8 px-8 rounded-lg shadow-sm h-85 flex flex-col justify-between" style="background-color: var(--yc-neutral-gray-0);">
            <!-- 所在地セクション -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin class="w-5 h-5 mr-2 text-blue-600" />
                所在地
              </h3>
              <p class="text-base text-gray-700 mb-4">{{ site.address }}</p>
              
              <div class="border-t pt-4">
                <h4 class="text-base font-semibold text-gray-900 mb-2">最寄り駅</h4>
                <p class="text-base text-gray-700">{{ site.nearest }}</p>
              </div>
              
            </div>
            
            <!-- 電話番号セクション -->
            <div id="phone-reservation" class="border-t pt-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Phone class="w-5 h-5 mr-2 text-blue-600" />
                お電話でのご予約
              </h3>
              <div class="space-y-4">
                <a
                  :href="`tel:${site.phone}`"
                  class="block text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
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
        </div>
        
        <!-- 地図 -->
        <div class="rounded-lg shadow-sm overflow-hidden" style="background-color: var(--yc-neutral-gray-0);">
          <div class="relative">
            <!-- ストリートビュー画像 -->
            <a
              :href="site.mapUrl"
              target="_blank"
              rel="noopener"
              class="relative h-85 w-full block cursor-pointer group"
            >
              <img
                :src="streetViewImageUrl"
                alt="やまうちクリニック ストリートビュー"
                class="w-full h-full object-cover"
                @error="handleImageError"
              />
              <!-- オーバーレイ -->
              <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-200">
                <div class="text-center">
                  <MapPin class="w-8 h-8 mx-auto mb-2" style="color: #CDE8E0;" />
                  <p class="text-sm font-medium mb-3" style="color: #CDE8E0;">やまうちクリニック</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MapPin, Phone } from 'lucide-vue-next'

const site = useSite()

// ストリートビュー画像のURL
const streetViewImageUrl = 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?cb_client=maps_sv.tactile&w=900&h=600&pitch=-21.375175266729656&panoid=iLr20S4MA8kT6GD-MDfeUg&yaw=66.33358063243625'

// 画像読み込みエラーハンドリング
const handleImageError = () => {
  console.warn('ストリートビュー画像の読み込みに失敗しました')
}
</script>