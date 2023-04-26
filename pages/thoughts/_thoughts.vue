<template>
  <main class="p-8 mx-auto max-w-7xl">
    <section v-if="post">
      <article class="content">
        <header
          class="w-full max-w-5xl mx-auto format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
        >
          <router-back class="text-xs font-medium text-gray-400 md:text-sm" />
          <!-- <h5 v-if="post.createdAt" class="my-4 text-xs font-medium text-gray-400 md:my-8 md:text-sm"> -->
          <h5 v-if="post.createdAt" class="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-400">
            {{ formatDate(post.createdAt) }}
          </h5>
          <!-- <h1 class="text-2xl md:text-4xl">{{ post.title }}</h1> -->
          <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ post.title }}</h1>
          <!-- <p class="mb-4 text-xl md:text-2xl text-primary-600 dark:text-primary-400">{{ post.description }}</p> -->
          <p class="mt-6 text-xl leading-8 text-gray-700">{{ post.description }}</p>
        </header>
        <img v-if="post.cover" class="object-cover w-full my-8 aspect-video rounded-xl bg-gray-50" :src="post.cover" />
        <nuxt-content
          :document="post"
          class="w-full max-w-5xl mx-auto format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
        />
      </article>
    </section>
  </main>
</template>

<script>
export default {
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
