<template>
  <main class="p-8 mx-auto max-w-7xl">
    <section v-if="projects" class="w-full max-w-5xl mx-auto">
      <h1 class="mb-8 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">Projects</h1>
      <projects :amount="10" />
    </section>
  </main>
</template>

<script>
export default {
  head: {
    title: 'Robin Schreiner – Projects.',
  },
  async asyncData({ $content, error }) {
    let projects
    try {
      projects = await $content('projects').fetch()
    } catch (e) {
      error({ message: 'Project not found' })
    }
    return { projects }
  },
}
</script>
