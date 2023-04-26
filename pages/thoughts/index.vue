<template>
  <main class="p-8 mx-auto max-w-7xl">
    <section v-if="posts" class="w-full max-w-5xl mx-auto">
      <h1 class="mb-8 text-2xl">Thoughts</h1>
      <posts post-type="thoughts" :amount="10" />
    </section>
  </main>
</template>

<script>
export default {
  head: {
    title: 'Robin Schreiner – Thoughts.',
  },
  async asyncData({ $content, error }) {
    let posts
    try {
      posts = await $content('thoughts').fetch()
    } catch (e) {
      error({ message: 'Thought not found' })
    }
    return { posts }
  },
}
</script>
