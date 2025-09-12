<template>
  <Disclosure v-slot="{ open }">
    <DisclosureButton
      class="flex justify-between w-full px-6 py-4 text-left text-gray-900 rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 transition-colors duration-200"
      style="background-color: var(--yc-brand-glow-400);"
    >
      <span class="font-medium">{{ question }}</span>
      <ChevronDown
        :class="open ? 'rotate-180 transform' : ''"
        class="h-5 w-5 text-gray-500 transition-transform duration-200"
      />
    </DisclosureButton>
    <DisclosurePanel class="px-6 pt-4 pb-6 text-gray-700 rounded-b-lg border-x border-b border-gray-200" style="background-color: var(--yc-brand-base-100);">
      {{ answer }}
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDown } from 'lucide-vue-next'

defineProps<{
  question: string
  answer: string
}>()
</script>