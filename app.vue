<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- ハンバーガーメニュー -->
    <HamburgerMenu />
    <!-- テーマ切り替えボタン -->
    <div class="fixed top-4 right-4 z-50">
      <ThemeToggle />
    </div>
    <NuxtPage />
    <!-- フローティング電話ボタン -->
    <FloatingCallButton />
  </div>
</template>

<script setup lang="ts">
// Global app configuration
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  font-feature-settings: "palt";
}
</style>