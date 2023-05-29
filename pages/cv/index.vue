<template>
  <main class="p-8 mx-auto max-w-7xl">
    <section v-if="jobs" class="w-full max-w-5xl mx-auto">
      <h1 class="mb-8 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">Experience</h1>
      <cvitem :amount="10" />
    </section>
  </main>
</template>

<script>
export default {
  head: {
    title: 'Robin Schreiner – CV.',
  },
  async asyncData({ $content, error }) {
    let jobs
    try {
      jobs = await $content('jobs').fetch()
    } catch (e) {
      error({ message: 'Job not found' })
    }
    return { jobs }
  },
}
</script>
