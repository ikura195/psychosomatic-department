<template>
  <section id="features" class="section-padding">
    <div class="container-custom">
      <h2 class="text-3xl font-bold text-center mb-16" style="color: var(--yc-neutral-gray-900);">当院の特徴</h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- 特徴1: ご予約 -->
        <div class="feature-card">
          <div class="feature-image-container">
            <img src="/images/features/reservation.jpg" alt="ご予約" class="feature-image" />
            <div class="feature-number">01</div>
          </div>
          <div class="feature-content">
            <h3 class="feature-title">ご予約</h3>
            <div class="feature-divider"></div>
            <p class="feature-description">
              初回の診察では十分なお時間を確保し、患者様のお話をじっくりとお伺いします。
            </p>
            <a href="tel:06-6628-0555" class="feature-cta">
              ご予約は<span class="cta-link">こちらから</span>
            </a>
          </div>
        </div>

        <!-- 特徴2: プライバシー配慮 -->
        <div class="feature-card">
          <div class="feature-image-container">
            <img src="/images/features/privacy.jpg" alt="プライバシー配慮" class="feature-image" />
            <div class="feature-number">02</div>
          </div>
          <div class="feature-content">
            <h3 class="feature-title">プライバシー配慮</h3>
            <div class="feature-divider"></div>
            <p class="feature-description">
              他の患者様と顔を合わせにくい配置や、静かで落ち着いた待合環境を整えています。安心してご来院いただけます。
            </p>
          </div>
        </div>

        <!-- 特徴3: 駅から徒歩圏内 -->
        <div class="feature-card">
          <div class="feature-image-container">
            <img src="/images/features/access.jpg" alt="駅から徒歩圏内" class="feature-image" />
            <div class="feature-number">03</div>
          </div>
          <div class="feature-content">
            <h3 class="feature-title">駅から徒歩圏内</h3>
            <div class="feature-divider"></div>
            <p class="feature-description">
              最寄り駅から徒歩でアクセスしやすい立地で、通院の負担を軽減します。お仕事帰りにもお気軽にご来院ください。
            </p>
          </div>
        </div>

        <!-- 特徴4: 地域医療との連携 -->
        <div class="feature-card">
          <div class="feature-image-container">
            <img src="/images/features/collaboration.jpg" alt="地域医療との連携" class="feature-image" />
            <div class="feature-number">04</div>
          </div>
          <div class="feature-content">
            <h3 class="feature-title">地域医療との連携</h3>
            <div class="feature-divider"></div>
            <p class="feature-description">
              必要に応じて他の医療機関と連携し、総合的な治療サポートを提供します。患者様に最適な治療を提供いたします。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// アイコンのインポートは不要になったため削除
</script>

<style scoped>
.feature-card {
  @apply bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300;
  background-color: var(--yc-neutral-gray-0);
  border: 1px solid var(--yc-neutral-gray-200);
}

.feature-image-container {
  @apply relative;
}

.feature-image {
  @apply w-full h-48 object-cover;
  border-radius: 1rem 1rem 0 0;
}

.feature-number {
  @apply absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold;
  background-color: var(--yc-neutral-gray-0);
  border: 1px solid var(--yc-neutral-gray-300);
  color: var(--yc-neutral-gray-800);
  z-index: 10;
}

.feature-content {
  @apply p-6 pt-8;
}

.feature-title {
  @apply text-xl font-bold mb-4 text-center;
  color: var(--yc-neutral-gray-900);
}

.feature-divider {
  @apply w-full h-px mb-4;
  background-color: var(--yc-neutral-gray-300);
}

.feature-description {
  @apply text-sm leading-relaxed mb-6;
  color: var(--yc-neutral-gray-700);
}

.feature-cta {
  @apply text-sm font-medium block text-center;
  color: var(--yc-neutral-gray-800);
  text-decoration: none;
}

.feature-cta:hover {
  color: var(--yc-brand-base-600);
}

.cta-link {
  @apply relative pb-1;
  text-decoration: none;
}

.cta-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300;
  background-color: var(--yc-brand-base-600);
}

.feature-cta:hover .cta-link::after {
  width: 100%;
}

/* ホバー効果 */
.feature-card:hover {
  transform: translateY(-4px);
}

.feature-card:hover .feature-image {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

/* レスポンシブ調整 */
@media (max-width: 768px) {
  .feature-image {
    @apply h-40;
  }
  
  .feature-content {
    @apply p-4 pt-6;
  }
  
  .feature-title {
    @apply text-lg;
  }
}
</style>