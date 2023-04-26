<template>
  <header
    class="grid gap-8 p-8 grid-cols-headerMobile md:grid-cols-2"
    x-data="{ open: false, isMobile: (window.innerWidth < 768) ? true : false}"
    x-on:resize.window="isMobile = (window.innerWidth < 768) ? true : false"
  >
    <div class="logo">
      <nuxt-link class="transition opacity-100 cursor-pointer hover:opacity-80" to="/"
        ><h1 class="flex flex-col font-sans">
          <span class="font-semibold"
            >Robin Schreiner
            <span class="opacity-50" v-if="headerText">/ {{ headerText }}</span>
          </span>
          <span class="opacity-50 font-base">Product Leader</span>
        </h1></nuxt-link
      >
    </div>
    <div class="flex items-center justify-end p-4 -m-4 cursor-pointer md:hidden" x-on:click="open = ! open">
      <svg
        x-show="!open"
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
        x-show="open"
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

    <nav
      class="grid grid-cols-2 col-span-2 gap-8 text-sm leading-6 md:col-span-1 open"
      x-show="open || !isMobile"
      x-transition.opacity
    >
      <ul class="navbar">
        <p class="font-medium text-md">Links</p>
        <li><nuxt-link x-on:click="open = ! open" to="/">Start</nuxt-link></li>
        <li><nuxt-link x-on:click="open = ! open" to="/about-me">About me</nuxt-link></li>
        <li><nuxt-link x-on:click="open = ! open" to="/projects">Projects</nuxt-link></li>
        <li><nuxt-link x-on:click="open = ! open" to="/thoughts">Thoughts</nuxt-link></li>
        <li><nuxt-link x-on:click="open = ! open" to="/cv">Experience</nuxt-link></li>
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
      headerText: '',
    }
  },
  created() {
    const { name } = this.$route
    if (name === 'PageOne') {
      this.headerText = 'Text for Page One'
    } else if (name === 'PageTwo') {
      this.headerText = 'Text for Page Two'
    }
  },
}
</script>
