<template>
  <section class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">診療時間</h2>
        
        <div class="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div class="overflow-x-auto">
            <table class="w-full border-collapse min-w-[400px]">
              <thead>
                <tr class="bg-gray-50">
                  <th class="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-gray-900 border border-gray-300 text-sm sm:text-base">診療時間</th>
                  <th class="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-gray-900 border border-gray-300 text-sm sm:text-base">月</th>
                  <th class="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-gray-900 border border-gray-300 text-sm sm:text-base">火</th>
                  <th class="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-gray-900 border border-gray-300 text-sm sm:text-base">水</th>
                  <th class="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-gray-900 border border-gray-300 text-sm sm:text-base">木</th>
                  <th class="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-gray-900 border border-gray-300 text-sm sm:text-base">金</th>
                  <th class="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-gray-900 border border-gray-300 text-sm sm:text-base">土</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-2 sm:px-4 py-2 sm:py-3 text-center font-medium text-gray-900 border border-gray-300 text-xs sm:text-sm">午前9:30~12:30</td>
                  <td class="px-2 sm:px-4 py-2 sm:py-3 text-center border border-gray-300">
                    <span class="text-green-600 text-lg sm:text-xl">•</span>
                  </td>
                  <td class="px-2 sm:px-4 py-2 sm:py-3 text-center border border-gray-300">
                    <span class="text-green-600 text-lg sm:text-xl">•</span>
                  </td>
                  <td class="px-2 sm:px-4 py-2 sm:py-3 text-center border border-gray-300">
                    <span class="text-red-500 text-lg sm:text-xl">/</span>
                  </td>
                  <td class="px-2 sm:px-4 py-2 sm:py-3 text-center border border-gray-300">
                    <span class="text-green-600 text-lg sm:text-xl">•</span>
                  </td>
                  <td class="px-2 sm:px-4 py-2 sm:py-3 text-center border border-gray-300">
                    <span class="text-green-600 text-lg sm:text-xl">•</span>
                  </td>
                  <td class="px-2 sm:px-4 py-2 sm:py-3 text-center border border-gray-300">
                    <span class="text-green-600 text-lg sm:text-xl">•</span>
                  </td>
                </tr>
                <tr>
                  <td class="px-2 sm:px-4 py-2 sm:py-3 text-center font-medium text-gray-900 border border-gray-300 text-xs sm:text-sm">午後5:00~7:00</td>
                  <td class="px-2 sm:px-4 py-2 sm:py-3 text-center border border-gray-300">
                    <span class="text-green-600 text-lg sm:text-xl">•</span>
                  </td>
                  <td class="px-2 sm:px-4 py-2 sm:py-3 text-center border border-gray-300">
                    <span class="text-red-500 text-lg sm:text-xl">-</span>
                  </td>
                  <td class="px-2 sm:px-4 py-2 sm:py-3 text-center border border-gray-300">
                    <span class="text-red-500 text-lg sm:text-xl">/</span>
                  </td>
                  <td class="px-2 sm:px-4 py-2 sm:py-3 text-center border border-gray-300">
                    <span class="text-green-600 text-lg sm:text-xl">•</span>
                  </td>
                  <td class="px-2 sm:px-4 py-2 sm:py-3 text-center border border-gray-300">
                    <span class="text-green-600 text-lg sm:text-xl">•</span>
                  </td>
                  <td class="px-2 sm:px-4 py-2 sm:py-3 text-center border border-gray-300">
                    <span class="text-red-500 text-lg sm:text-xl">/</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="text-center mb-4">
          <p class="text-sm text-gray-600">土曜午後・水曜・日曜・祝日休診</p>
          <p class="text-sm text-gray-600">※初診:要予約</p>
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