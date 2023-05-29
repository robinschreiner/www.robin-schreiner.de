<template>
  <ul v-if="projects.length > 0" class="flex flex-col gap-4 cards">
    <li v-for="(project, index) in projects" :key="index">
      <nuxt-link
        :to="`/${postType}/${project.slug}`"
        class="relative grid gap-4 p-4 py-4 -mx-4 transition rounded-lg opacity-100 lg:grid-cols-2 group hover:bg-gray-50 bg-contrast-hover card card--clickable"
      >
        <div class="flex flex-col lg:mb-4">
          <div class="items-center text-xl font-semibold group-hover:underline">{{ project.title }}</div>
          <div class="text-sm text-gray-500">{{ project.category }}</div>
        </div>
        <div class="aspect-w-16 aspect-h-9">
          <img v-if="project.cover" class="object-cover group-hover:scale-105 no-zoom" :src="project.cover" />
        </div>
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
    {{ amount > 1 ? 'projects not found' : 'Post not found' }}
  </p>
</template>

<script>
export default {
  name: 'projects',
  props: {
    postType: {
      type: String,
      default: 'projects',
      validator: (val) => ['projects'].includes(val),
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
      projects: [],
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
    this.projects = await this.fetchprojects()
    this.loading = false
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    },
    async fetchprojects(postType = this.postType, amount = this.amount, sortBy = this.sortBy) {
      return this.$content(postType)
        .sortBy(sortBy.key, sortBy.direction)
        .limit(amount)
        .fetch()
        .catch((err) => console.error(err) || [])
    },
  },
}
</script>
