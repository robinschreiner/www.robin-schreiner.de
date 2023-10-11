<template>
  <main class="p-8 mx-auto max-w-7xl">
    <section v-if="post">
      <article>
        <header class="w-full max-w-xl mx-auto mb-16 text-center format format-sm sm:format-base">
          <p v-if="post.createdAt" class="text-lg font-mono font-medium leading-8 tracking-tight text-gray-500">
            {{ formatDate(post.createdAt) }}
            </h5>
          <h1 class="py-4 text-xl font-medium font-brand md:text-2xl lg:text-3xl xl:text-4xl text-center">
            {{ post.title }}
          </h1>
          <h2 class="max-w-3xl font-sans text-xl text-gray-500">{{ post.description }}</h2>
        </header>
        <div v-if="post.cover" class="my-8 aspect-w-16 aspect-h-9 rounded-xl bg-gray-50">
          <img class="object-cover w-full mt-0 mb-16 rounded-xl" :src="post.cover"
            :alt="'Coverimage for the current Article ' + post.description" />
        </div>
        <nuxt-content :document="post" class="w-full max-w-5xl mx-auto mt-8 format format-sm sm:format-base content" />
      </article>
      <div class="my-16 text-center">
        <figure class="w-32 h-32 mx-auto">
          <nuxt-picture src="images/robin-schreiner4.jpg"
            :imgAttrs="{ id: 'my-id', class: 'object-cover w-full h-full rounded-full no-zoom' }" placeholder
            alt="Portrait for Robin Schreiner" />
        </figure>
        <h3 class="mt-6 text-base font-medium leading-7 tracking-tight text-gray-900">Thanks for taking the time,</h3>
        <p class="text-sm leading-6 text-gray-600">Robin Schreiner</p>
      </div>
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
