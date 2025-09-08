<template>
  <a
    :href="site.noticeUrl"
    target="_blank"
    rel="noopener"
    class="inline-flex items-center px-6 py-3 bg-orange-100 hover:bg-orange-200 text-orange-800 font-medium rounded-lg transition-colors duration-200 min-h-[44px]"
  >
    <Calendar class="w-5 h-5 mr-2" />
    臨時案内・休診情報を確認
    <ExternalLink class="w-4 h-4 ml-2" />
  </a>
</template>

<script setup lang="ts">
import { Calendar, ExternalLink } from 'lucide-vue-next'

const site = useSite()
</script>