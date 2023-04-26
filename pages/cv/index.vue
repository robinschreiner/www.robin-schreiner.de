<template>
  <main class="p-8 mx-auto max-w-7xl">
    <section v-if="jobs" class="w-full max-w-5xl mx-auto">
      <cvitem post-type="jobs" :amount="10" />
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
