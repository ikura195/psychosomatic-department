<template>
  <div>
    <!-- メインコンテンツ -->
    <Hero />
    <AnimationSection />
    <Notices />
    <Philosophy />
    <Features />
    <FirstVisitFlow />
    <Gallery />
    <Hours />
    <Access />
    <SiteFooter />
    
    <!-- モバイル固定フッターバー -->
    <StickyCallBar />
  </div>
</template>

<script setup lang="ts">
// Components
import Hero from '~/components/Hero.vue'
import AnimationSection from '~/components/AnimationSection.vue'
import Notices from '~/components/Notices.vue'
import Philosophy from '~/components/Philosophy.vue'
import Features from '~/components/Features.vue'
import FirstVisitFlow from '~/components/FirstVisitFlow.vue'
import Hours from '~/components/Hours.vue'
import Gallery from '~/components/Gallery.vue'
import Access from '~/components/Access.vue'
import SiteFooter from '~/components/SiteFooter.vue'
import StickyCallBar from '~/components/StickyCallBar.vue'

const site = useSite()

// SEO設定
useHead({
  title: site.seo.title,
  meta: [
    { name: 'description', content: site.seo.description },
    { name: 'keywords', content: '心療内科,精神科,不眠,不安,うつ,カウンセリング,メンタルヘルス' },
    { property: 'og:title', content: site.seo.title },
    { property: 'og:description', content: site.seo.description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: site.seo.title },
    { name: 'twitter:description', content: site.seo.description }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'MedicalClinic',
        'name': site.clinicName,
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': site.address
        },
        'telephone': site.phone,
        'medicalSpecialty': ['心療内科', '精神科'],
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Thursday'],
            'opens': '09:30',
            'closes': '12:30'
          },
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Thursday'],
            'opens': '15:00',
            'closes': '18:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': 'Friday',
            'opens': '09:30',
            'closes': '12:30'
          },
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': 'Saturday',
            'opens': '09:00',
            'closes': '13:00'
          }
        ]
      })
    }
  ]
})

// Viewport設定
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
</script>