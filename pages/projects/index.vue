<template>
  <main class="p-8 mx-auto max-w-7xl">
    <section v-if="posts" class="w-full max-w-5xl mx-auto">
      <h1 class="mb-8 text-2xl">Projects</h1>
      <posts post-type="projects" :amount="10" />
    </section>
  </main>
</template>

<script>
export default {
  head: {
    title: 'Robin Schreiner – Projects.',
  },
  async asyncData({ $content, error }) {
    let posts
    try {
      posts = await $content('projects').fetch()
    } catch (e) {
      error({ message: 'Project not found' })
    }
    return { posts }
  },
}
</script>
