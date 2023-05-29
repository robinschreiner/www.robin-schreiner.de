<template>
  <main class="p-8 mx-auto max-w-7xl">
    <section v-if="post">
      <article>
        <header class="w-full max-w-xl mx-auto mb-16 text-center format format-sm sm:format-base">
          <h5 v-if="post.createdAt" class="text-lg font-semibold leading-8 tracking-tight text-gray-400">
            {{ formatDate(post.createdAt) }}
          </h5>
          <h1 class="my-4 mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ post.title }}</h1>
          <p class="mt-2 text-xl leading-8 text-gray-700">{{ post.description }}</p>
        </header>
        <div v-if="post.cover" class="my-8 aspect-w-16 aspect-h-9 rounded-xl bg-gray-50">
          <img class="object-cover w-full mt-0 mb-16 rounded-xl" :src="post.cover" />
        </div>
        <nav class="p-4 mt-4 text-left rounded-md content bg-gray-50">
          <h2 class="mt-0">Table of Contents</h2>
          <ul>
            <li
              :class="{
                'ml-3': link.depth === 3,
                hidden: link.depth === 2,
              }"
              class="toc-list"
              v-for="link of post.toc"
              :key="link.id"
            >
              <a role="button" class="block mb-2 text-base transition-colors duration-75" :href="`#${link.id}`">{{
                link.text
              }}</a>
            </li>
          </ul>
        </nav>
        <nuxt-content :document="post" class="w-full max-w-5xl mx-auto mt-8 format format-sm sm:format-base content" />
      </article>
      <div class="my-16 text-center">
        <figure class="w-32 h-32 mx-auto">
          <nuxt-picture
            src="images/robin-schreiner2.jpg"
            :imgAttrs="{ id: 'my-id', class: 'object-cover w-full h-full rounded-full no-zoom' }"
            placeholder
            alt="Portrait for Robin Schreiner"
          />
        </figure>
        <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">Thanks for reading,</h3>
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
