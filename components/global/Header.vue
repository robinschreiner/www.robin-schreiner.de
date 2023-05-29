<template>
  <header class="grid gap-8 p-8 grid-cols-headerMobile md:grid-cols-2">
    <div class="logo">
      <nuxt-link class="flex items-center gap-2 transition opacity-100 cursor-pointer hover:opacity-80" to="/">
        <figure class="w-14 h-14">
          <nuxt-picture
            src="images/robin-schreiner2.jpg"
            :imgAttrs="{ id: 'my-id', class: 'object-cover w-full h-full rounded-full no-zoom' }"
            placeholder
            alt="Portrait for Robin Schreiner"
          />
        </figure>
        <h1 class="flex flex-col font-sans">
          <span class="font-semibold">Robin Schreiner </span>
          <span class="opacity-50 font-base">Product Leader</span>
        </h1></nuxt-link
      >
    </div>
    <div class="flex items-center justify-end p-4 -m-4 cursor-pointer md:hidden" @click="open = !open">
      <svg
        v-if="!open"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <svg
        v-if="open"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>

    <nav class="grid grid-cols-2 col-span-2 gap-8 text-sm leading-6 md:col-span-1" v-if="open || !isMobile">
      <ul class="navbar">
        <p class="font-medium text-md">Links</p>
        <li><nuxt-link @click="open == false" to="/">Start</nuxt-link></li>
        <li><nuxt-link @click="open == false" to="/about-me">About me</nuxt-link></li>
        <!-- <li><nuxt-link @click="open == false" to="/projects">Projects</nuxt-link></li> -->
        <li><nuxt-link @click="open == false" to="/thoughts">Thoughts</nuxt-link></li>
        <li><nuxt-link @click="open == false" to="/cv">Experience</nuxt-link></li>
      </ul>
      <ul class="external-link">
        <p class="font-medium text-md">Connect</p>
        <li><a href="tel:001729362572" target="_blank">Telephone</a></li>
        <li><a href="mailto:hey@robin-schreiner.de" target="_blank">E-Mail</a></li>
        <li><a href="https://www.linkedin.com/in/robin-schreiner" target="_blank">LinkedIn</a></li>
        <li><a href="https://twitter.com/robin_schreiner" target="_blank">Twitter</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      isMobile: false,
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize(e) {
      if (window.innerWidth < 768) {
        this.open = false
        this.isMobile = true
      } else {
        this.isMobile = false
        this.open = true
      }
    },
  },
}
</script>
