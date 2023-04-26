<template>
  <nuxt-link @click.native="to ? null : $router.go(-1)" :to="to ? to : '/'">
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      class="inline w-6 h-6 transition flex-0 group-hover:translate-x-2"
    >
      <path
        d="M 6.9804688 8.9902344 A 1.0001 1.0001 0 0 0 6.2929688 9.2929688 L 1.3808594 14.205078 A 1.0001 1.0001 0 0 0 1.3769531 15.792969 A 1.0001 1.0001 0 0 0 1.3828125 15.796875 L 6.2929688 20.707031 A 1.0001 1.0001 0 1 0 7.7070312 19.292969 L 4.4140625 16 L 28 16 A 1.0001 1.0001 0 1 0 28 14 L 4.4140625 14 L 7.7070312 10.707031 A 1.0001 1.0001 0 0 0 6.9804688 8.9902344 z"
        fill="currentColor"
      ></path>
    </svg>
    <slot>go back</slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      // ? Override with a path instead of router back
      type: String,
      default: '',
    },
  },
}
</script>
