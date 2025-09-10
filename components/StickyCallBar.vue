<template>
  <div class="fixed bottom-0 left-0 right-0 z-50 lg:hidden" style="background-color: var(--yc-neutral-gray-0); border-top: 1px solid var(--yc-neutral-gray-200);">
    <div class="flex">
      <a
        :href="`tel:${site.phone}`"
        class="flex-1 flex items-center justify-center py-4 font-semibold transition-colors duration-200 min-h-[56px]"
        style="background-color: var(--yc-brand-base-500); color: var(--yc-neutral-gray-0);"
        data-analytics-id="tel-cta-sticky"
        @mouseenter="$event.target.style.backgroundColor = 'var(--yc-brand-base-600)'"
        @mouseleave="$event.target.style.backgroundColor = 'var(--yc-brand-base-500)'"
      >
        <Phone class="w-5 h-5 mr-2" />
        電話で相談
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Phone } from 'lucide-vue-next'

const site = useSite()
</script>