<template>
  <main class="p-8 mx-auto max-w-7xl">
    <section v-if="post">
      <article>
        <header class="w-full max-w-xl mx-auto text-center format format-sm sm:format-base">
          <h5 v-if="post.createdAt" class="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-400">
            {{ formatDate(post.createdAt) }}
          </h5>
          <h1 class="my-4 mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ post.title }}</h1>
          <p class="mt-2 text-xl leading-8 text-gray-700">{{ post.description }}</p>
        </header>
        <div v-if="post.cover" class="my-8 aspect-w-16 aspect-h-9 rounded-xl bg-gray-50">
          <img class="object-cover w-full mt-0 mb-16 rounded-xl" :src="post.cover" />
        </div>
        <nuxt-content :document="post" class="w-full max-w-5xl mx-auto mt-8 format format-sm sm:format-base content" />
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
      post = await $content('thoughts', params.thoughts).fetch()
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
