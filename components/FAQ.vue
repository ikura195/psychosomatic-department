<template>
  <section id="faq" class="section-padding">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-16" style="color: var(--yc-neutral-gray-900);">よくある質問</h2>
        
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
