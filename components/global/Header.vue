<template>
  <header
    class="fixed inset-x-0 top-0 z-40 grid items-center w-full h-20 p-4 font-medium grid-cols-header md:px-8 md:py-6 scrim-bg bg-white/30 backdrop-blur-sm"
  >
    <nav class="flex items-center gap-2" aria-label="Main Menu">
      <ul class="flex items-center gap-2">
        <li class="">
          <nuxt-link class="" to="/">Start</nuxt-link>
        </li>
        <li class="">
          <nuxt-link class="" to="/about-me">About me</nuxt-link>
        </li>
        <li class="">
          <nuxt-link class="" to="/projects">Projects</nuxt-link>
        </li>
        <li class="">
          <nuxt-link class="" to="/lists">Lists</nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="items-center justify-center">
      <Logo />
    </div>
    <div id="desktopMenu" class="items-center justify-end hidden gap-4 text-sm font-medium lg:flex print:flex">
      <a href="mailto:hey@robin-schreiner.de"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
        <span class="hidden">hey@robin-schreiner.de</span></a
      >
      <span class="opacity-50">/</span>
      <a href="tel:004917625009426">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
        <span class="hidden">+49 17625009426</span>
      </a>
      <span class="opacity-50">/</span>
      <a href="https://www.linkedin.com/in/robin-schreiner/" target="_blank" class="text-blue-600 hover:text-blue-700"
        ><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 30 30" fill="currentColor">
          <path
            d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
      <a href="https://twitter.com/robin_schreiner" target="_blank" class="text-blue-600 hover:text-blue-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 30 30" fill="currentColor">
          <path
            d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>
