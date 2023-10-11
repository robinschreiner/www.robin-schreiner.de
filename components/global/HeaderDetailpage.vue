<template>
  <header class="grid gap-8 p-8 grid-cols-headerMobile md:grid-cols-2">
    <div class="logo">
      <nuxt-link class="flex items-center gap-2 transition opacity-100 cursor-pointer hover:opacity-80" to="/">
        <div class="flex flex-col font-sans">
          <span class="font-medium">Robin Schreiner </span>
          <span class="opacity-50 font-base">Product Leader / UX / Design Systems</span>
        </div>
      </nuxt-link>
    </div>
    <div class="flex items-center justify-end">
      <router-back class="text-xs font-medium text-gray-500 md:text-sm" />
    </div>
  </header>
</template>
