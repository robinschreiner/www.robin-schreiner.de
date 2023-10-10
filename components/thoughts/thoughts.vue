<template>
  <ul v-if="posts.length > 0" class="flex flex-col gap-1 cards">
    <li v-for="(post, index) in posts" :key="index">
      <nuxt-link :to="`/${postType}/${post.slug}`"
        class="relative flex items-center justify-between w-full gap-4 p-2 py-2 -mx-2 transition rounded-md hover:bg-blue-100 group">
        <p class="items-center font-medium transition font-body group-hover:underline">{{ post.title }}</p>
        <span v-if="post.createdAt && showDate" class="font-mono text-sm text-gray-500 whitespace-no-wrap">
          {{ formatDate(post.createdAt) }}
        </span>
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
