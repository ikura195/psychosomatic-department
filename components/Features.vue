<template>
  <section class="section-padding bg-gray-50">
    <div class="container-custom">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-16">当院の特徴</h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Clock class="w-6 h-6 text-blue-600" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-3">初診はゆとりある診療枠</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            初回の診察では十分なお時間を確保し、患者様のお話をじっくりとお伺いします。
          </p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Shield class="w-6 h-6 text-blue-600" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-3">プライバシー配慮の待合</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            他の患者様と顔を合わせにくい配置や、静かで落ち着いた待合環境を整えています。
          </p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <MapPin class="w-6 h-6 text-blue-600" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-3">駅から徒歩圏内</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            最寄り駅から徒歩でアクセスしやすい立地で、通院の負担を軽減します。
          </p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Users class="w-6 h-6 text-blue-600" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-3">地域医療との連携</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
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