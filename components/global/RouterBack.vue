<template>
  <div
    @click="hasHistory() ? $router.go(-1) : $router.push('/')"
    class="p-4 -m-4 text-gray-700 cursor-pointer hover:text-gray-800 hover:bg-gray-50"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  </div>
</template>

<!-- <script>
export default {
  data() {
    return {
      path: '/',
    }
  },
  created() {
    if (this.$nuxt?.context?.from?.path) this.path = this.$nuxt.context.from.path
  },
}
</script> -->

<script>
export default {
  methods: {
    hasHistory() {
      return window.history.length > 2
    },
  },
}
</script>
