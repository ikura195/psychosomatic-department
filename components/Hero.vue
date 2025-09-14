<template>
  <section class="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
    <!-- アニメーション背景 -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="floating-animation animation-1">
        <div class="floating-image" style="background-image: url('/images/animations/animation_depression_panic.png');"></div>
      </div>
      <div class="floating-animation animation-2">
        <div class="floating-image" style="background-image: url('/images/animations/animation_insomnia_sleep.png');"></div>
      </div>
      <div class="floating-animation animation-3">
        <div class="floating-image" style="background-image: url('/images/animations/animation_kokoro_main.png');"></div>
      </div>
      <div class="floating-animation animation-4">
        <div class="floating-image" style="background-image: url('/images/animations/animation_menopause_health.png');"></div>
      </div>
      <div class="floating-animation animation-5">
        <div class="floating-image" style="background-image: url('/images/animations/animation_stress_anxiety.png');"></div>
      </div>
    </div>
    
    <div class="container-custom relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- メインヘッダー -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 pb-8" style="color: var(--yc-brand-glow-900);">
          {{ site.clinicName }}
        </h1>
        
        
        <!-- 新年の挨拶画像 -->
        <div class="mt-16">
          <img 
            src="/images/animations/snake.jpg" 
            alt="2025年新年の挨拶 - 一陽来復" 
            class="mx-auto max-w-full h-auto rounded-lg"
            style="max-height: 300px;"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next'

const site = useSite()
</script>

<style scoped>
.floating-animation {
  position: absolute;
  opacity: 0.70;
  animation-duration: 35s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

.floating-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.2);
}

/* 各アニメーション画像の倍率設定 */
.animation-1 .floating-image {
  background-size: 230%;
}

.animation-2 .floating-image {
  background-size: 170%;
}

.animation-3 .floating-image {
  background-size: 250%;
}

.animation-4 .floating-image {
  background-size: 230%;
}

.animation-5 .floating-image {
  background-size: 230%;
}

.floating-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  z-index: 1;
}

.animation-1 {
  top: 10%;
  right: -250px;
  animation-name: float1;
  animation-delay: 0s;
}

.animation-2 {
  top: 25%;
  right: -250px;
  animation-name: float2;
  animation-delay: 5s;
}

.animation-3 {
  top: 40%;
  right: -250px;
  animation-name: float3;
  animation-delay: 10s;
}

.animation-4 {
  top: 55%;
  right: -250px;
  animation-name: float4;
  animation-delay: 15s;
}

.animation-5 {
  top: 70%;
  right: -250px;
  animation-name: float5;
  animation-delay: 20s;
}

@keyframes float1 {
  0% {
    transform: translateX(0) translateY(-15px);
  }
  25% {
    transform: translateX(-30vw) translateY(-20px);
  }
  50% {
    transform: translateX(-50vw) translateY(0);
  }
  75% {
    transform: translateX(-70vw) translateY(20px);
  }
  100% {
    transform: translateX(-120vw) translateY(-15px);
  }
}

@keyframes float2 {
  0% {
    transform: translateX(0) translateY(15px);
  }
  25% {
    transform: translateX(-35vw) translateY(30px);
  }
  50% {
    transform: translateX(-55vw) translateY(-10px);
  }
  75% {
    transform: translateX(-75vw) translateY(25px);
  }
  100% {
    transform: translateX(-120vw) translateY(10px);
  }
}

@keyframes float3 {
  0% {
    transform: translateX(0) translateY(-10px);
  }
  25% {
    transform: translateX(-40vw) translateY(-25px);
  }
  50% {
    transform: translateX(-60vw) translateY(15px);
  }
  75% {
    transform: translateX(-80vw) translateY(-20px);
  }
  100% {
    transform: translateX(-120vw) translateY(-20px);
  }
}

@keyframes float4 {
  0% {
    transform: translateX(0) translateY(20px);
  }
  25% {
    transform: translateX(-45vw) translateY(20px);
  }
  50% {
    transform: translateX(-65vw) translateY(-15px);
  }
  75% {
    transform: translateX(-85vw) translateY(30px);
  }
  100% {
    transform: translateX(-120vw) translateY(5px);
  }
}

@keyframes float5 {
  0% {
    transform: translateX(0) translateY(-25px);
  }
  25% {
    transform: translateX(-40vw) translateY(-30px);
  }
  50% {
    transform: translateX(-60vw) translateY(10px);
  }
  75% {
    transform: translateX(-80vw) translateY(-25px);
  }
  100% {
    transform: translateX(-120vw) translateY(-30px);
  }
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .floating-image {
    width: 120px;
    height: 120px;
  }
  
  .animation-1 { top: 15%; }
  .animation-2 { top: 30%; }
  .animation-3 { top: 45%; }
  .animation-4 { top: 60%; }
  .animation-5 { top: 75%; }
}
</style>