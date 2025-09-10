// /composables/site.ts
export type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun" | "hol"
export type TimeRange = { start: string; end: string }
export type HoursMap = Record<DayKey, TimeRange[]>

export const siteConfig = {
  clinicName: "やまうちクリニック",
  phone: "06-6628-0555",                 // "06-xxxx-xxxx"
  address: "〒545-0011　大阪府大阪市阿倍野区昭和町5丁目8‐1",
  nearest: "大阪メトロ 御堂筋線 西田辺駅1番出口スグ",           // "〇〇駅〇番出口 徒歩◯分"
  mapUrl: "https://www.google.com/maps/dir/35.7629952,139.7030912/%E3%80%92545-0011+%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E9%98%BF%E5%80%8D%E9%87%8E%E5%8C%BA%E6%98%AD%E5%92%8C%E7%94%BA%EF%BC%95%E4%B8%81%E7%9B%AE%EF%BC%98%E2%88%92%EF%BC%91/@34.7217069,135.4587832,13.04z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x6000ddcdf67cca47:0xf55f5bfb9d398d3e!2m2!1d135.5156756!2d34.6232766?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D",            // Googleマップ等
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
    title: "やまうちクリニック｜心療内科・精神科",
    description: "不眠・不安・気分の落ち込みなどでお困りの方へ。初診はお電話でご相談ください。診療時間・アクセスを掲載。"
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