<template>
  <section v-if="posts.length > 0" class="grid md:grid-cols-3 gap-4">
    <nuxt-link :to="`/${postType}/${post.slug}`"
      class="flex max-w-xl flex-col items-start justify-start group p-4 border border-blue-100 rounded-lg hover:border-blue-200 hover:bg-blue-50"
      v-for="(post, index) in posts" :key="index">
      <div class="flex items-start gap-x-4 text-xs">
        <time :datetime="post.createdAt"
          class="font-mono text-sm text-gray-500 whitespace-no-wrap">{{ formatDate(post.createdAt) }}</time>
      </div>
      <div class="group relative">
        <h3 class="text-xl font-medium group-hover:underline">
          <a href="#">
            <span class="absolute inset-0"></span>
            {{ post.title }}
          </a>
        </h3>
        <p class="mt-4 mb-4 line-clamp-3 text-gray-600">
          {{ post.description }}
        </p>

        <a href=""
          class="p-4 py-2 transition bg-blue-50 group-hover:bg-blue-100 rounded-md group-hover:text-blue-700 group-hover:underline  font-medium text-sm text-blue-500">Read
          more</a>
      </div>
    </nuxt-link>
  </section>
  <div v-else-if="loading" class="grid md:grid-cols-3 gap-4 cards">
    <div v-for="placeholder in placeholderClasses" :key="placeholder.id" class="space-y-6 card">
      <content-placeholders :rounded="false" :class="placeholder">
        <content-placeholders-heading />
        <content-placeholders-text />
      </content-placeholders>
    </div>
    <div v-for="placeholder in placeholderClasses" :key="placeholder.id" class="space-y-6 card">
      <content-placeholders :rounded="false" :class="placeholder">
        <content-placeholders-heading />
        <content-placeholders-text />
      </content-placeholders>
    </div>
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
    showDate: {
      type: Boolean,
      default: true,
    },
    showDetails: {
      type: Boolean,
      default: true,
    },
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
      const classes = ['w-full', 'w-full', 'w-full']
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
