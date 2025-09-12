<template>
  <section class="section-padding">
    <div class="container-custom">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-16">初めての方へ（受診の流れ）</h2>
      
      <!-- 受診フロー -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div class="flex flex-col h-full text-center p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out" style="background-color: var(--yc-neutral-gray-0);">
          <div class="w-16 h-16 bg-brand-base-400 bg-opacity-80 rounded-full flex items-center justify-center mx-auto mb-4" aria-label="ステップ1">
            <span class="text-white font-bold text-lg">1</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">お電話でのご予約</h3>
          <p class="text-sm text-gray-600 flex-grow">まずはお電話でご相談ください。症状やご希望をお伺いします。</p>
        </div>
        
        <div class="flex flex-col h-full text-center p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out" style="background-color: var(--yc-neutral-gray-0);">
          <div class="w-16 h-16 bg-brand-base-400 bg-opacity-80 rounded-full flex items-center justify-center mx-auto mb-4" aria-label="ステップ2">
            <span class="text-white font-bold text-lg">2</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">ご来院・問診票記入</h3>
          <p class="text-sm text-gray-600 flex-grow">予約日時にご来院いただき、問診票にご記入をお願いします。</p>
        </div>
        
        <div class="flex flex-col h-full text-center p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out" style="background-color: var(--yc-neutral-gray-0);">
          <div class="w-16 h-16 bg-brand-base-400 bg-opacity-80 rounded-full flex items-center justify-center mx-auto mb-4" aria-label="ステップ3">
            <span class="text-white font-bold text-lg">3</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">診察</h3>
          <p class="text-sm text-gray-600 flex-grow">問診票を基に、お話をお伺いし、適切な診断と治療方針をご提案します。</p>
        </div>
        
        <div class="flex flex-col h-full text-center p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out" style="background-color: var(--yc-neutral-gray-0);">
          <div class="w-16 h-16 bg-brand-base-400 bg-opacity-80 rounded-full flex items-center justify-center mx-auto mb-4" aria-label="ステップ4">
            <span class="text-white font-bold text-lg">4</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">お会計・次回予約</h3>
          <p class="text-sm text-gray-600 flex-grow">受付でお会計と次回のご予約をお取りします。</p>
        </div>
      </div>
      
      <!-- よくある質問 -->
      <div class="max-w-4xl mx-auto">
        <h3 class="text-2xl font-bold text-center text-gray-900 mb-8">よくある質問</h3>
        
        <div class="space-y-4">
          <DisclosurePanel
            v-for="(faq, index) in faqs"
            :key="index"
            :question="faq.question"
            :answer="faq.answer"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DisclosurePanel from './DisclosurePanel.vue'

const faqs = [
  {
    question: "保険証は必要ですか？",
    answer: "はい、健康保険証をお持ちください。また、お薬手帳をお持ちの方はご持参ください。初診時は保険証の確認が必要となります。"
  },
  {
    question: "紹介状は必要ですか？",
    answer: "紹介状は必須ではありません。お持ちでない場合でも受診いただけます。ただし、他院で治療を受けられている場合は、紹介状があるとより適切な治療を提供できます。"
  },
  {
    question: "自立支援医療（精神通院医療）は利用できますか？",
    answer: "はい、自立支援医療（精神通院医療）に対応しています。受給者証をお持ちの方は、受診時に受付にご提示ください。"
  },
  {
    question: "初診にかかる時間はどのくらいですか？",
    answer: "初診は30分〜60分程度のお時間をいただいています。症状や状況により前後する場合がありますので、お時間に余裕を持ってお越しください。"
  },
  {
    question: "駐車場はありますか？",
    answer: "申し訳ございませんが、専用駐車場のご用意はありません。お車でお越しの際は、近隣のコインパーキングをご利用ください。公共交通機関でのご来院をお勧めします。"
  }
]
</script>