<template>
  <section class="animation-section py-16 bg-white">
    <div class="container-custom">
      <div class="max-w-6xl mx-auto">
        <!-- アニメーション画像コンテナ -->
        <div class="animation-container">
          <div
            v-for="(image, index) in animationImages"
            :key="index"
            :ref="el => setImageRef(el, index)"
            class="animation-image"
            :class="{ 'visible': visibleImages[index] }"
            :style="{ '--animation-delay': `${getAnimationDelay(index)}s` }"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              :width="image.width"
              :height="image.height"
              loading="lazy"
              class="w-full h-full object-contain"
            />
            <!-- 文字オーバーレイ -->
            <div class="text-overlay">
              {{ image.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// アニメーション画像の設定
const animationImages = [
  {
    src: '/images/animations/animation_stress_anxiety.png',
    alt: 'ストレス・不安の治療',
    text: 'ストレス・不安',
    width: 800,
    height: 800
  },
  {
    src: '/images/animations/animation_depression_panic.png',
    alt: 'うつ病・パニック障害の治療',
    text: 'うつ病・パニック',
    width: 700,
    height: 700
  },
  {
    src: '/images/animations/animation_kokoro_main.png',
    alt: 'こころのケア',
    text: 'こころ',
    width: 900,
    height: 900
  },
  {
    src: '/images/animations/animation_menopause_health.png',
    alt: '更年期の健康相談',
    text: '更年期の健康',
    width: 800,
    height: 800
  },
  {
    src: '/images/animations/animation_insomnia_sleep.png',
    alt: '不眠・睡眠障害の治療',
    text: '不眠・睡眠',
    width: 800,
    height: 800
  }
]

// 表示状態の管理
const visibleImages = ref(Array(animationImages.length).fill(false))
const imageRefs = ref<HTMLElement[]>([])

// 画像要素の参照を設定
const setImageRef = (el: HTMLElement | null, index: number) => {
  if (el) {
    imageRefs.value[index] = el
  }
}

// アニメーション遅延の順番設定（左から順番に）
const getAnimationDelay = (index: number): number => {
  return index * 0.3 // 左から順番に0.3秒ずつ遅延
}

// Intersection Observer の設定
let observer: IntersectionObserver | null = null

onMounted(() => {
  // Intersection Observer を作成
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = imageRefs.value.indexOf(entry.target as HTMLElement)
          if (index !== -1) {
            // 遅延を考慮して表示
            setTimeout(() => {
              visibleImages.value[index] = true
            }, index * 200) // 200ms ずつ遅延
          }
        }
      })
    },
    {
      threshold: 0.1, // 10% 表示されたら発火
      rootMargin: '0px 0px -50px 0px' // 下部50px手前で発火
    }
  )

  // 各画像要素を監視対象に追加
  imageRefs.value.forEach((ref) => {
    if (ref && observer) {
      observer.observe(ref)
    }
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

</script>

<style scoped>
.animation-section {
  position: relative;
}

.animation-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  align-items: center;
  justify-items: center;
}

@media (min-width: 768px) {
  .animation-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 2rem;
    max-width: 1400px;
    margin: 0 auto;
    align-items: center;
    justify-items: center;
  }
  
  /* 指定された配置 - 2行目を中央に */
  .animation-image:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }
  
  .animation-image:nth-child(2) {
    grid-column: 2;
    grid-row: 1;
  }
  
  .animation-image:nth-child(3) {
    grid-column: 1;
    grid-row: 2;
    transform: translateZ(-100px) scale(0.8) translateX(150px);
  }
  
  .animation-image:nth-child(3).visible {
    transform: translateZ(0) scale(1.1) translateX(150px);
  }
  
  .animation-image:nth-child(4) {
    grid-column: 3;
    grid-row: 1;
  }
  
  .animation-image:nth-child(5) {
    grid-column: 3;
    grid-row: 2;
    transform: translateZ(-100px) scale(0.8) translateX(-150px);
  }
  
  .animation-image:nth-child(5).visible {
    transform: translateZ(0) scale(1) translateX(-150px);
  }
}

.animation-image {
  position: relative;
  opacity: 0;
  transform: translateZ(-100px) scale(0.8);
  transition: all 0.6s ease-out;
  transition-delay: var(--animation-delay, 0s);
  will-change: transform, opacity;
  max-width: 100%;
  height: auto;
}

.animation-image.visible {
  opacity: 1;
  transform: translateZ(0) scale(1);
}

/* 文字オーバーレイ */
.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--yc-neutral-gray-600);
  font-size: 1.5rem;
  font-weight: normal;
  text-align: center;
  pointer-events: none;
  z-index: 10;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


/* 青色画像（うつ病・パニック）を小さく */
.animation-image:nth-child(2) {
  transform: translateZ(-100px) scale(0.6);
}

.animation-image:nth-child(2).visible {
  transform: translateZ(0) scale(0.8);
}

/* レスポンシブ調整 */
@media (max-width: 1023px) {
  .animation-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    max-width: none;
  }
  
  .animation-image:nth-child(3) {
    grid-column: 1 / -1; /* メイン画像を全幅に */
    max-width: 500px;
  }
  
  .text-overlay {
    font-size: 1.25rem;
  }
}

@media (max-width: 767px) {
  .animation-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .animation-image:nth-child(3) {
    grid-column: 1;
    max-width: 400px;
  }
  
  .text-overlay {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .animation-container {
    gap: 1.5rem;
  }
  
  .animation-image:nth-child(3) {
    max-width: 350px;
  }
  
  .text-overlay {
    font-size: 0.875rem;
  }
}
</style>
