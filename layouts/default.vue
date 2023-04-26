<template>
  <div class="mx-auto max-w-7xl">
    <Header :header-text="$nuxt.$options.head.headerText" />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      headerText: 'Hello World',
    }
  },
}
</script>
