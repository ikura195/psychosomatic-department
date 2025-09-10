<template>
  <section class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">診療時間</h2>
        
        <div class="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="bg-gray-50">
                  <th class="px-6 py-4 text-left font-semibold text-gray-900">曜日</th>
                  <th class="px-6 py-4 text-center font-semibold text-gray-900">診療時間</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(day, key) in site.hours"
                  :key="key"
                  class="border-t border-gray-200"
                >
                  <td class="px-6 py-4 font-medium text-gray-900">
                    {{ dayNames[key as DayKey] }}曜日
                  </td>
                  <td class="px-6 py-4 text-center">
                    <div v-if="day.length === 0" class="text-gray-500">
                      休診
                    </div>
                    <div v-else class="space-y-1">
                      <div
                        v-for="(time, index) in day"
                        :key="index"
                        class="text-gray-900"
                      >
                        {{ time.start }}〜{{ time.end }}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="text-center">
          <p class="text-sm text-gray-600">{{ site.lastCallNote }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { DayKey } from '~/composables/site'
import { dayNames } from '~/composables/site'

const site = useSite()
</script>