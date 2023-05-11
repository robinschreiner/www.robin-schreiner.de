<template>
  <div @click="hasHistory() ? $router.go(-1) : $router.push('/')" class="text-gray-700 hover:text-gray-800">
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      class="inline w-8 h-8 transition flex-0"
    >
      <path
        d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
        fill="currentColor"
      />
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
