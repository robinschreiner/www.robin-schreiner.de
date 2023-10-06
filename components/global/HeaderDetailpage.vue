<template>
  <header class="grid gap-8 p-8 grid-cols-headerMobile md:grid-cols-2">
    <div class="logo">
      <nuxt-link class="flex items-center gap-2 transition opacity-100 cursor-pointer hover:opacity-80" to="/">
        <!-- <figure class="w-14 h-14">
          <nuxt-picture
            src="images/robin-schreiner2.jpg"
            :imgAttrs="{ id: 'my-id', class: 'object-cover w-full h-full rounded-full no-zoom' }"
            placeholder
            width="3.5rem"
            height="3.5rem"
            alt="Portrait for Robin Schreiner"
          />
        </figure> -->
        <h1 class="flex flex-col font-sans">
          <span class="font-semibold">Robin Schreiner </span>
          <span class="opacity-50 font-base">Product Leader</span>
        </h1>
      </nuxt-link>
    </div>
    <div class="flex items-center justify-end">
      <router-back class="text-xs font-medium text-gray-400 md:text-sm" />
    </div>
  </header>
</template>
