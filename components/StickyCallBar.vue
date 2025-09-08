<template>
  <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 lg:hidden">
    <div class="flex">
      <a
        :href="`tel:${site.phone}`"
        class="flex-1 flex items-center justify-center py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200 min-h-[56px]"
        data-analytics-id="tel-cta-sticky"
      >
        <Phone class="w-5 h-5 mr-2" />
        電話で相談
      </a>
      
      <a
        :href="site.noticeUrl"
        target="_blank"
        rel="noopener"
        class="flex-1 flex items-center justify-center py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-colors duration-200 min-h-[56px]"
      >
        <Calendar class="w-5 h-5 mr-2" />
        臨時案内
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Phone, Calendar } from 'lucide-vue-next'

const site = useSite()
</script>