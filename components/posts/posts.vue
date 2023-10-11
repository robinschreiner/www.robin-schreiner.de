<template>
  <ul v-if="posts.length > 0" class="flex flex-col gap-8 cards">
    <li v-for="(post, index) in posts" :key="index" class="">
      <nuxt-link :to="`/${postType}/${post.slug}`" class="relative grid gap-8 transition rounded-md">
        <template v-if="postType === 'projects'">
          <div class="grid gap-2 transition transform md:gap-2 odd:items-end group hover:translate-x-2">
            <div class="flex flex-col justify-end order-2 w-full md:order-1">
              <div class="mb-4">
                <span class="text-xs font-medium text-gray-500 group-hover:scale-105">{{ post.category }}</span>
                <h3 class="mt-2 font-medium text-md md:text-xl">{{ post.title }}</h3>
                <p class="text-sm">{{ post.description }}</p>
              </div>
            </div>
            <div v-if="post.cover" class="overflow-hidden aspect-w-16 aspect-h-9 md:aspect-w-6 md:aspect-h-3">
              <img class="absolute inset-0 object-cover transition transform rounded-xl" :src="post.cover" />
            </div>
          </div>
        </template>

        <template v-else>
          <div class="w-full transition transform group hover:translate-x-2">
            <span v-if="post.createdAt" class="text-xs font-medium text-gray-500 whitespace-no-wrap rounded-full">
              {{ formatDate(post.createdAt) }}
            </span>
            <h3 class="mt-2 font-medium text-md md:text-xl">{{ post.title }}</h3>
            <p class="text-sm">{{ post.description }}</p>
          </div>
        </template>
      </nuxt-link>
    </li>
  </ul>
  <div v-else-if="loading" class="cards">
    <div v-for="placeholder in placeholderClasses" :key="placeholder.id" class="space-y-6 card">
      <content-placeholders :rounded="false" :class="placeholder">
        <content-placeholders-heading />
        <content-placeholders-text />
      </content-placeholders>
    </div>
  </div>
  <p v-else class="max-w-5xl mx-auto">
    {{ amount > 1 ? 'Posts not found' : 'Post not found' }}
  </p>
</template>

<script>
export default {
  name: 'Posts',
  props: {
    postType: {
      type: String,
      default: 'thoughts',
      validator: (val) => ['thoughts', 'projects'].includes(val),
    },
    amount: {
      // ? https://content.nuxtjs.org/fetching#limitn
      type: Number,
      default: 10,
      validator: (val) => val >= 0 && val < 100,
    },
    image: {
      // ? https://content.nuxtjs.org/fetching#limitn
      type: Boolean,
      default: true,
      validator: (val) => [false, true].includes(val),
    },
    sortBy: {
      // ? https://content.nuxtjs.org/fetching#sortbykey-direction
      type: Object,
      default: () => ({
        key: 'slug',
        direction: 'desc', // you probably want 'asc' here
      }),
      validator: (obj) => typeof obj.key === 'string' && typeof obj.direction === 'string',
    },
  },
  data() {
    return {
      posts: [],
      loading: true,
    }
  },
  computed: {
    placeholderClasses() {
      const classes = ['w-full', 'w-2/3', 'w-5/6']
      return [...Array.from({ length: this.amount }, (v, i) => classes[i % classes.length])] // repeats classes after one another
    },
  },
  async mounted() {
    this.loading = true
    this.posts = await this.fetchPosts()
    this.loading = false
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    },
    async fetchPosts(postType = this.postType, amount = this.amount, sortBy = this.sortBy) {
      return this.$content(postType)
        .sortBy(sortBy.key, sortBy.direction)
        .limit(amount)
        .fetch()
        .catch((err) => console.error(err) || [])
    },
  },
}
</script>
