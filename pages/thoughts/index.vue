<template>
  <main class="p-8 mx-auto max-w-7xl">
    <section v-if="posts" class="w-full mx-auto max-w-7xl">
      <h1 class="mb-8 text-2xl font-medium tracking-tight text-gray-900 sm:text-3xl md:text-4xl">Thoughts</h1>
      <thumbnails :amount="30" />
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
