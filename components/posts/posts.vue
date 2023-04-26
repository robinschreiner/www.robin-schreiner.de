<template>
  <ul v-if="posts.length > 0" class="flex flex-col gap-4 cards">
    <li v-for="(post, index) in posts" :key="index">
      <nuxt-link
        :to="`/${postType}/${post.slug}`"
        class="relative grid gap-4 p-4 py-4 -mx-4 transition rounded-md hover:bg-gray-100"
      >
        <template v-if="postType === 'projects'">
          <div class="grid gap-2 md:gap-4 md:grid-cols-2 odd:items-end group">
            <div class="flex flex-col justify-center order-2 w-full md:order-1">
              <div class="mb-4">
                <span class="text-xs font-medium text-gray-400">{{ post.category }}</span>
                <h3 class="mt-2 font-semibold md:mt-4 text-md md:text-xl">{{ post.title }}</h3>
                <p class="text-sm md:mt-2">{{ post.description }}</p>
              </div>
              <svg
                viewBox="0 0 19 18"
                class="w-4 h-4 transition group-hover:translate-x-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.00819592 9.80702V8.19298L15.8976 8.19298L9.24414 1.53951L10.3919 0.391744L19.0002 9L10.3919 17.6083L9.24414 16.4605L15.8976 9.80702L0.00819592 9.80702Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <img v-if="post.cover" class="w-full cover-image aspect-square" :src="post.cover" />
          </div>
        </template>

        <template v-else>
          <div class="w-full">
            <span v-if="post.createdAt" class="text-xs font-medium text-gray-400 whitespace-no-wrap rounded-full">
              {{ formatDate(post.createdAt) }}
            </span>
            <h3 class="mt-4 font-semibold text-md md:text-xl">{{ post.title }}</h3>
            <p class="mt-2 text-sm">{{ post.description }}</p>
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
