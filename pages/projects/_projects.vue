<template>
  <main class="p-8 mx-auto max-w-7xl">
    <section v-if="post">
      <article class="">
        <header class="w-full max-w-4xl">
          <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ post.title }}</h1>
          <p class="mt-2 text-2xl font-medium leading-8 text-gray-500">{{ post.subtitle }}</p>
          <p class="col-span-2 mt-6 text-xl leading-8 text-gray-700">{{ post.description }}</p>
        </header>
        <div v-if="post.cover" class="my-8 aspect-w-16 aspect-h-9 rounded-xl bg-gray-50">
          <img class="object-cover w-full mt-0 mb-16 rounded-xl no-zoom" :src="post.cover" />
        </div>
        <nuxt-content :document="post" class="w-full mx-auto max-w-7xl content blog" />
      </article>
    </section>
  </main>
</template>

<script>
export default {
  layout: 'detailpage',
  async asyncData({ $content, params, error }) {
    let post
    try {
      post = await $content('projects', params.projects).fetch()
    } catch (e) {
      error({ message: 'Thought not found' })
    }
    return { post }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    },
  },
}
</script>
