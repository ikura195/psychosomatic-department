// /composables/site.ts
export type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun" | "hol"
export type TimeRange = { start: string; end: string }
export type HoursMap = Record<DayKey, TimeRange[]>

export const siteConfig = {
  clinicName: "{{CLINIC_NAME}}",
  phone: "{{TEL}}",                 // "06-xxxx-xxxx"
  address: "{{ADDRESS}}",
  nearest: "{{STATION}}",           // "〇〇駅〇番出口 徒歩◯分"
  mapUrl: "{{MAP_URL}}",            // Googleマップ等
  noticeUrl: "{{NOTICE_URL}}",      // Notion/Googleカレンダー公開URL
  hours: {
    mon: [{ start: "09:30", end: "12:30" }, { start: "15:00", end: "18:00" }],
    tue: [{ start: "09:30", end: "12:30" }, { start: "15:00", end: "18:00" }],
    wed: [],
    thu: [{ start: "09:30", end: "12:30" }, { start: "15:00", end: "18:00" }],
    fri: [{ start: "09:30", end: "12:30" }],
    sat: [{ start: "09:00", end: "13:00" }],
    sun: [],
    hol: []
  } as HoursMap,
  lastCallNote: "最終受付は各終了30分前",
  seo: {
    title: "{{CLINIC_NAME}}｜心療内科・精神科",
    description: "不眠・不安・気分の落ち込みなどでお困りの方へ。初診はお電話でご相談ください。診療時間・アクセス・臨時案内を掲載。"
  }
} as const

export const useSite = () => siteConfig

export const dayNames: Record<DayKey, string> = {
  mon: "月",
  tue: "火", 
  wed: "水",
  thu: "木",
  fri: "金",
  sat: "土",
  sun: "日",
  hol: "祝"
}