<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-16">院内写真</h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="group cursor-pointer"
        >
          <div class="aspect-w-16 aspect-h-12 bg-gray-200 rounded-lg overflow-hidden">
            <img
              :src="image.src"
              :alt="image.alt"
              :width="400"
              :height="300"
              loading="lazy"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p class="mt-3 text-sm text-gray-600 text-center">{{ image.caption }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const images = [
  {
    src: '/clinic/exterior.webp',
    alt: 'クリニック外観',
    caption: 'クリニック外観'
  },
  {
    src: '/clinic/reception.webp',
    alt: '受付カウンター',
    caption: '受付'
  },
  {
    src: '/clinic/waiting-room.webp',
    alt: '待合室の様子',
    caption: '待合室'
  },
  {
    src: '/clinic/consultation-room.webp',
    alt: '診察室',
    caption: '診察室'
  },
  {
    src: '/clinic/hallway.webp',
    alt: '院内廊下',
    caption: '院内廊下'
  },
  {
    src: '/clinic/restroom.webp',
    alt: 'お手洗い',
    caption: 'お手洗い'
  }
]
</script>